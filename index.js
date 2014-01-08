var slice = Array.prototype.slice;

module.exports = function maybe (fn){
    return function(){
        var args = slice.call(arguments),
            valid,
            result;
        
        valid = args.reduce(function(curr, prev){
            return curr && prev != null;
        }, true);

        if(!valid) return void 0;
        
        result = fn.apply(null, args);
        
        return typeof result === 'function' ? maybe(result) : result;
    }
}