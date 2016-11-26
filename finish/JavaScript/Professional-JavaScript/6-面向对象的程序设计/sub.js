function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
}

function SubType() {
    this.subProperty = false;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;

SubType.prototype.getSubValue = function() {
    return this.subProperty;
}

var instance = new SubType();
console.log(instance.getSuperValue());
console.log(instance.getSubValue());
// 这个最好指向自己把
console.log(SubType.prototype.constructor);

console.log(Object.prototype.isPrototypeOf(instance));
console.log(SuperType.prototype.isPrototypeOf(instance));
console.log(SubType.prototype.isPrototypeOf(instance));
