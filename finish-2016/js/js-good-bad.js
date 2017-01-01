// [object Function]
// Object 首先是个对象，其次它也是一个函数，或者我们可以称之为函数对象。
// 被直接调用
// 绑定到某个对象调用
// 如果仅仅只有初始化对象的功能可以施加 new 构造出一个对象
// 象普通的对象一样操作它的属性
console.log(Object.prototype.toString.apply(Object));
console.log(Object.prototype.toString.apply(Function));
console.log(Object.prototype.toString.apply(Date));
console.log(Object.prototype.toString.apply(Array));
// 如果只是 typeof 都是 "function"

// [object Object]
console.log(Object.prototype.toString.apply({}));
// [object Array]
console.log(Object.prototype.toString.apply([]));
// [object Math]
console.log(Object.prototype.toString.apply(Math));
// [object JSON]
console.log(Object.prototype.toString.apply(JSON));
// 如果只是 typeof 都是 "object"



// 下面的代码片段是 JavaScript 使用传统风格的面向对象示例。 Person 为构造函数，通过 new 操作符调用，返回初始化的对象； Person.prototype 定义原型，所有构造函数创建出来的对象，其 __proto__ 引用到 Person.prototype。

// function Person(firstName, lastName, age, gender) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
// }

// Person.prototype.nationality = 'China';

// Person.prototype.getName = function() {
//     return this.firstName + ' ' + this.lastName;
// }

// Person.prototype.getAge = function() {
//     return this.age;
// }

// Person.prototype.getGender = function() {
//     return this.gender;
// }

// function Employee(firstName, lastName, age, gender, title) {
//     Person.apply(this, arguments);
//     this.title = title;
// }

// Employee.prototype = new Person();
// Employee.prototype.constructor = Employee;

// Employee.prototype.getName = function() {
//     return Person.prototype.getName.apply(this) + ', ' + this.title;
// }

// var classicalPerson = new Person('San', 'Su', 10, 'female');

// console.log(classicalPerson.getName());

// var classicalEmployee = new Employee('San', 'Su', 10, 'female', 'Manager');

// console.log(classicalEmployee.getName());
// console.log(classicalEmployee.getGender());

var personPrototype = {
    nationality: 'China',
    getName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    getAge: function() {
        return this.age;
    },
    getGender: function() {
        return this.gender;
    }
}


var prototypalPerson = Object.create(personPrototype);

console.log(prototypalPerson);

prototypalPerson.firstName = 'San';
prototypalPerson.lastName = 'Su';
prototypalPerson.age = 10;
prototypalPerson.gender = 'female';

console.log(prototypalPerson.getName());

var employeePrototype = Object.create(personPrototype);

employeePrototype.getName = function() {
    return personPrototype.getName.apply(this) + ', ' + this.title;
}

employeePrototype.firstName = 'San';
employeePrototype.lastName = 'Su';
employeePrototype.age = 10;
employeePrototype.gender = 'female';
employeePrototype.title = 'Manager';

console.log(employeePrototype.getName());


// 再比较一下基于原型的面向对象的实现，跟上一个代码片段的功能是等价的，可以看到这种原生的实现方式简洁且同样富有表现力。


// JavaScript 是以函数作为一等公民的语言，支持 lambda 表达式，高阶函数，柯里化等函数式特性。下面的代码片段是柯里化的实现示例，将 add 函数施加柯里化函数编程变成一个新的函数。 顺便说明一下，示例代码中使用了 arguments 对象，这个对象是一种类数组的对象，通过 Object.prototype.apply(arguments) 可以得验证，其结果是 "[object Object]"，需要通过 Array.prototype.slice 函数转换成 Array ， arguments 对象是一种坏的设计，需要加以注意。

function curry(fn) {
    var slice = Array.prototype.slice;

    args = slice.call(arguments, 1);

    console.log(args);

    return function() {
        console.log(slice.apply(arguments));
        return fn.apply(null, args.concat(slice.apply(arguments)));
    }
}

function add(a, b) {
    return a + b;
}

var plusOne = curry(add, 1);
plusOne(3); // 4
curry(add, 2)(3); // 5
