export function typeOf (operand: any){
  return Object.prototype.toString.apply(operand).replace(/\[object /, '').replace(/]/, '').toLowerCase();
};
