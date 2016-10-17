function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function inherit(sub, superType) {
    var prototype = object(superType.prototype);
    prototype.constructor = sub;
    sub.prototype = prototype;
}

function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function() {
    console.log(this.name);
}

function SubType(name, age) {
    SuperType.call(this, name);

    this.age = age;
}

inherit(SubType, SuperType);

SubType.prototype.sayAge = function() {
    console.log(this.age);
}

var instance1 = new SubType('cody', '25');

instance1.sayAge();
instance1.sayName();
instance1.colors.push('orange');

var instance2 = new SubType('hah', 23);

console.log(instance2.colors);
