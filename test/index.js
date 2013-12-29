var test = require('tap').test,
	maybe = require('../'),
	curry = require('../../curry'),
	add = curry(function(a,b){
		return a + b
	}),
	mayAdd = maybe(add);

test('throws ReferenceError if argument is null', function(t){
	t.plan(1);
	t.throws(function(){ mayAdd(null, 1)}, {name: 'ReferenceError', message: 'argument cannot be null'})
});