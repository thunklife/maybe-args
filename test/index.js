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
