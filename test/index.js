var test = require('tap').test,
	maybe = require('../'),
	add = function(a,b){
		return a + b
	},
	mayAdd = maybe(add);

test('throws ReferenceError if argument is null', function(t){
	var result = mayAdd(null,1);
	t.plan(1);

	t.equals(void 0, result);
});