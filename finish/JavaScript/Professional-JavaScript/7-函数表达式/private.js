function MyObject() {
    var privateVarible = 10;

    function privateFunction() {
        return false;
    }

    this.publicMethod = function() {
        privateVarible++;
        return privateFunction();
    }
}

function Person(name) {
    this.getName = function() {
        return name;
    }
    this.setName = function(value) {
        name = value;
    }
}


var person = new Person('cody');
console.log(person.getName());
person.setName('co');
console.log(person.getName());
