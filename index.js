var slice = Array.prototype.slice;

module.exports = function maybe (fn){
	return function(){
		var args = slice.call(arguments),
			valid = args.reduce(function(curr, prev){
				return curr && (prev != null);
			},true);

		if(!valid) throw "Invalid arguments";
		return fn.apply(null, args);
	}
}