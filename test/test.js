var typeOf = require('../lib/typeOf');
var assert = require('assert');

describe('typeOf returns:', function() {

  it('\'string\' when a string is offered', function() {
    assert.equal('string', typeOf('foo'));
  });

  it('\'object\' when an object is offered', function() {
    assert.equal('object', typeOf({'foo':'bar'}));
  });

  it('\'array\' when an array is offered', function() {
    assert.equal('array', typeOf([1,2,3]));
  });

  it('\'date\' when a date is offered', function() {
    assert.equal('date', typeOf( new Date ('2016')));
  });

});
