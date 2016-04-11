var test = require('tap').test,
    maybe = require('../'),
    add = function(a,b){
        return a + b
    },
    mayAdd = maybe(add),
    curriedAdd = function(a){
        return function(b){
            return a + b;
        };
    },
    mayCurriedAdd = maybe(curriedAdd);

function DummyClass(){}
DummyClass.prototype.setValue = maybe(function(value){
    this._value = value;
});
DummyClass.prototype.getValue = function(){
    return this._value;
};

test('returns undefined when one or more args are null', function(t){
    var result = mayAdd(null,1);
    t.plan(1);

    t.equals(result, void 0);
});

test('returns undefined when one or more args are undefined', function(t){
    var result = mayAdd(void 0,1);
    t.plan(1);

    t.equals(result, void 0);
});

test('returns function result when no args are null/undefined', function(t){
    var result = mayAdd(2,1);
    t.plan(1);

    t.equals(result, add(2,1));
});

test('works correctly with curried functions', function(t){
    t.plan(3);

    t.equals(mayCurriedAdd(null,1), void 0);
    t.equals(mayCurriedAdd(1)(null), void 0);
    t.equals(mayCurriedAdd(1)(2), 3);
});

test('binds context correctly for instance methods', function(t){
    var dummy = new DummyClass();
    t.plan(3);

    dummy.setValue(42);
    t.equals(dummy.getValue(), 42);

    dummy.setValue(void 0);
    t.equals(dummy.getValue(), 42);

    dummy.setValue(null);
    t.equals(dummy.getValue(), 42);
});
