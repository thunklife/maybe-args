maybe-args
=============

A simple function decorator to check that all arguments passed to a function are 'something' (not null or undefined). Influenced by [JavaScript Allonge](https://leanpub.com/javascript-allonge), and, as it happens, basically the same as what you find in [Allong.es](https://github.com/raganwald/allong.es/).

Also supports curried functions.

install
=======

```
npm install maybe-args
```

usage
=====

```
var maybe = require('maybe-args'),
	add =maybe(function(a,b){
		return a + b;
	});

add(1, null) //=> ReferenceError
add(1,2) //=> 3
```

license
=======
MIT