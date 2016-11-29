'use strict'

module.exports = function (operand){

  var type = typeof(operand);

  if (type === 'object'){

    //Array
    if (Array.isArray(operand)) {
      type = 'array';
      return type;
    }

    //Date
    if (Object.prototype.toString.call(operand) === '[object Date]') {
      type = 'date'
      return type;
    }


  }

  return type;
};
