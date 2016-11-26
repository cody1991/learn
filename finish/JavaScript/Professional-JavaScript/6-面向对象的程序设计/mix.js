function Super(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Super.prototype.sayName = function() {
    console.log(this.name);
}

function Sub(name, age) {
    Super.call(this, name);

    this.age = age;
}

Sub.prototype = new Super();
Sub.prototype.constructor = Sub;
Sub.prototype.sayAge = function() {
    console.log(this.age);
}

var instance1 = new Sub('cody', 20);
instance1.colors.push('black');

console.log(instance1.colors);
// console.log(instance1.name);
// console.log(instance1.age);
instance1.sayName();
instance1.sayAge();


var instance2 = new Sub('green', 23);
console.log(instance2.colors);
// console.log(instance2.name);
// console.log(instance2.age);
instance2.sayName();
instance2.sayAge();
