var test = require('tap').test,
    maybe = require('../'),
    add = function(a,b){
        return a + b
    },
    mayAdd = maybe(add);

test('returns undefined when invalid args are passed', function(t){
    var result = mayAdd(null,1);
    t.plan(1);

    t.equals(void 0, result);
});