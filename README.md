type-of-extra
=====================================

https://www.npmjs.com/package/type-of-extra

## About

A set of additional functionalities for [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
that differentiates between types within primatives.

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
var typeOf = require('type-of-extra');

console.log(typeOf('foo'));  //'string'
console.log(typeOf([1,2,4]); //'array'
```

## Test
npm test

## Notes

Still in development, pull requests welcome.

Currently extends to differentiate:
  - Array ('array')
  - Date ('date')
