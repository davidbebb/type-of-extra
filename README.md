type-of-extra
=====================================

https://www.npmjs.com/package/type-of-extra

## About

A set of additional functionalities for [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
that differentiates between types within primatives, built using typescript.

e.g.
```
// typeof
console.log( typeof([1,2]) ); //'object'

//typeOf
console.log( typeOf([1,2]) ); //'array'

```


## Installation
$ npm install --save type-of-extra

## Usage
```
var typeOf = require('type-of-extra').typeOf;

console.log(typeOf('foo'));  //'string'
console.log(typeOf([1,2,4]); //'array'
```

## Build
npm run build

## Test
npm test
