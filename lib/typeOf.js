"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function typeOf(operand) {
    return Object.prototype.toString.apply(operand).replace(/\[object /, '').replace(/]/, '').toLowerCase();
}
exports.typeOf = typeOf;
;
