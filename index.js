var slice = Array.prototype.slice;

module.exports = function maybe (fn){
	return function(){
		var args = slice.call(arguments),
			result;
		
		args.forEach(function(arg){
			if(arg == null) throw new ReferenceError('argument cannot be null');
		});

		result = fn.apply(null, args);
		return typeof result === 'function' ? maybe(result) : result;
	}
}