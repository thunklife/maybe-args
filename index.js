var slice = Array.prototype.slice;

module.exports = function maybe (fn){
    return function(){
        var args = slice.call(arguments),
            invalid,
            result;
        
        invalid = args.some(function(arg){
            return arg == null;
        });

        if(invalid) return void 0;
        
        result = fn.apply(this, args);
        
        return typeof result === 'function' ? maybe(result) : result;
    }
}
