// function inherit(subClass, superClass) {
//     function F() {};

//     F.prototype = superClass.prototype;
//     subClass.prototype = new F();
//     subClass.prototype.constructor = subClass.constructor;
// }

function Parent(hello) {
    this.hello = hello;
}

Parent.prototype.sayHello = function() {
    console.log(this.hello);
}

function Child(hello, world) {
    Parent.call(this, hello);
    this.world = world;
}

Child.prototype = new Parent();

Child.prototype.sayWorld = function() {
    console.log(this.world);
}

var c = new Child('zhang', 'cody');
c.sayWorld();
c.sayHello();
