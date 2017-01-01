'use strict';

function log(x, y) {
    // y = y || 'World';

    if (typeof y === 'undefined') {
        y = 'World';
    }

    console.log(x, y);
}
// 上面代码检查函数log的参数y有没有赋值，如果没有，则指定默认值为World。这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用。就像上面代码的最后一行，参数y等于空字符，结果被改为默认值。

// 为了避免这个问题，通常需要先判断一下参数y是否被赋值，如果没有，再等于默认值。

function log2(x) {
    var y = arguments.length <= 1 || arguments[1] === undefined ? 'World' : arguments[1];

    console.log(x, y);
}

function foo(_ref) {
    var x = _ref.x;
    var _ref$y = _ref.y;
    var y = _ref$y === undefined ? 5 : _ref$y;

    console.log(x, y);
}

// foo({}) // undefined, 5
// foo({x: 1}) // 1, 5
// foo({x: 1, y: 2}) // 1, 2
// foo() // TypeError: Cannot read property 'x' of undefined

// 上面代码中，如果函数fetch的第二个参数是一个对象，就可以为它的三个属性设置默认值。
// 上面的写法不能省略第二个参数，如果结合函数参数的默认值，就可以省略第二个参数。这时，就出现了双重默认值。
// 上面的写法不能省略第二个参数，如果结合函数参数的默认值，就可以省略第二个参数。这时，就出现了双重默认值。

// 上面代码中，函数fetch没有第二个参数时，函数参数的默认值就会生效，然后才是解构赋值的默认值生效，变量method才会取到默认值GET。
function fetch(url) {
    var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var _ref2$body = _ref2.body;
    var body = _ref2$body === undefined ? '' : _ref2$body;
    var _ref2$method = _ref2.method;
    var method = _ref2$method === undefined ? 'GET' : _ref2$method;
    var _ref2$headers = _ref2.headers;
    var headers = _ref2$headers === undefined ? {} : _ref2$headers;

    console.log(method);
}

fetch('http://example.com', {});
fetch('http://example.com');

// 写法一
function m1() {
    var _ref3 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref3$x = _ref3.x;
    var x = _ref3$x === undefined ? 0 : _ref3$x;
    var _ref3$y = _ref3.y;
    var y = _ref3$y === undefined ? 0 : _ref3$y;

    console.log([x, y]);
    return [x, y];
}

// 写法二
function m2() {
    var _ref4 = arguments.length <= 0 || arguments[0] === undefined ? {
        x: 0,
        y: 0
    } : arguments[0];

    var x = _ref4.x;
    var y = _ref4.y;

    console.log([x, y]);
    return [x, y];
}
// 上面两种写法都对函数的参数设定了默认值，区别是写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。

// 函数没有参数的情况
m1(); // [0, 0]
m2(); // [0, 0]

// x和y都有值的情况
m1({
    x: 3,
    y: 8
}); // [3, 8]
m2({
    x: 3,
    y: 8
}); // [3, 8]

// x有值，y无值的情况
m1({
    x: 3
}); // [3, 0]
m2({
    x: 3
}); // [3, undefined]

// x和y都无值的情况
m1({}); // [0, 0];
m2({}); // [undefined, undefined]

function f() {
    var x = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
    var y = arguments[1];

    console.log([x, y]);
}

f();
f(2);
// f(, 1)
f(undefined, 1);

function f2(x) {
    var y = arguments.length <= 1 || arguments[1] === undefined ? 5 : arguments[1];
    var z = arguments[2];

    console.log([x, y, z]);
}

f2();
f2(1);
// f2(1,,2) 报错
f2(1, undefined, 2);

// 函数的 length
// 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。

console.log(function (a) {}.length); // 1
console.log(function () {
    var a = arguments.length <= 0 || arguments[0] === undefined ? 5 : arguments[0];
}.length); // 0
console.log(function (a, b) {
    var c = arguments.length <= 2 || arguments[2] === undefined ? 5 : arguments[2];
}.length); // 2

var foo2 = 'outer';

function bar() {
    var func = arguments.length <= 0 || arguments[0] === undefined ? function (x) {
        return foo2;
    } : arguments[0];

    var foo2 = 'inner';
    console.log(func()); // outer
}

bar();