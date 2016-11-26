function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    }
}

var person1 = new Person('Cody', 29, 'FE');

console.log(person1.constructor);
console.log(person1 instanceof Object);
console.log(person1 instanceof Person);

var o = new Object();

Person.call(o, 'Kristen', 25, 'Nurse');

o.sayName();
