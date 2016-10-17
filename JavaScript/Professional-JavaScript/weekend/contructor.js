function Person() {}

Person.prototype = {
    // constructor:Person,
    name: 'Cody',
    age: 29,
    sayName: function() {
        console.log(this.name)
    }
}

Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: false,
    value: Person
});

var friend = new Person();

console.log(friend instanceof Object);
console.log(friend instanceof Person);
console.log(friend.constructor);
