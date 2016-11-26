function add10(num) {
    return num + 10;
}

function callSomeFunction(someFunction, someArgument) {
    return someFunction(someArgument);
}

var result = callSomeFunction(add10, 10);
console.log(result)

function getGreeting(name) {
    return 'Hello, ' + name;
}

result = callSomeFunction(getGreeting, 'cody');
console.log(result);

function createComparisonFunction(properyName) {

    return function(object1, object2) {
        var value1 = object1[properyName];
        var value2 = object2[properyName];

        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    }

}

var data = [{
    name: 'Zachary',
    age: 28
}, {
    name: 'Nicholas',
    age: 29
}];

data.sort(createComparisonFunction('name'));

console.log(data[0]);

data.sort(createComparisonFunction('age'));

console.log(data[0]);

function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}

console.log(factorial(3));

function outer() {
    inner();
}
outer();

function inner() {
    console.log(inner.caller);
    console.log(arguments.callee);
}

function sum(num1, num2) {
    return num1 + num2;
}

function callSum1(num1, num2) {
    return sum.apply(this, arguments);
}

function callSum2(num1, num2) {
    return sum.apply(this, [num1, num2]);
}

console.log(callSum1(10, 10));
console.log(callSum2(20, 20));

color = 'red';
var o = {
    color: 'blue'
}

function sayColor() {
    console.log(this.color);
}

var objectSayColor = sayColor.bind(o);
objectSayColor();
