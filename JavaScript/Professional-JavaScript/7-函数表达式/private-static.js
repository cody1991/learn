// (function() {
//     var privateVariable = 10;

//     function privateFunction() {
//         return false;
//     }

//     MyObject = function() {

//     }

//     MyObject.prototype.publicMethod = function() {
//         privateVariable++;
//         return privateFunction();
//     }

// })();

(function() {
    var name = '';
    Person = function(value) {
        name = value;
    }

    Person.prototype.getName = function() {
        return name;
    }

    Person.prototype.setName = function(value) {
        name = value;
    }

})();


var person1 = new Person('cody');
console.log(person1.getName());

person1.setName('co');
console.log(person1.getName());
