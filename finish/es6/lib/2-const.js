"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var PI = 3.1415;

// PI = 3

// const的作用域与let命令相同：只在声明所在的块级作用域内有效。

if (true) {
    var _MAX = 5;
}

MAX; // Uncaught ReferenceError: MAX is not defined

// const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。

// const声明的常量，也与let一样不可重复声明。

// 对于复合类型的变量，变量名不指向数据，而是指向数据所在的地址。const命令只是保证变量名指向的地址不变，并不保证该地址的数据不变，所以将一个对象声明为常量必须非常小心。

var foo = {};
foo.prop = 123;

foo.prop;
// 123

// 上面代码中，常量foo储存的是一个地址，这个地址指向一个对象。不可变的只是这个地址，即不能把foo指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性。

var a = [];
a.push("Hello"); // 可执行
a.length = 0; // 可执行
// a = ["Dave"]; // 报错
// 上面代码中，常量a是一个数组，这个数组本身是可写的，但是如果将另一个数组赋值给a，就会报错。

var foo1 = Object.freeze({});

// 如果真的想将对象冻结，应该使用Object.freeze方法。

// 除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数。

var constantize = function constantize(obj) {
    Object.freeze(obj);
    Object.keys(obj).forEach(function (key, value) {
        if (_typeof(obj[key]) === 'object') {
            constantize(obj[key]);
        }
    });
};

// 这种规定被视为JavaScript语言的一大问题，因为很容易不知不觉就创建了全局变量。ES6为了改变这一点，一方面规定，var命令和function命令声明的全局变量，依旧是全局对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于全局对象的属性。

// var a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
// window.a // 1

var b = 1;
// window.b // undefined
// 上面代码中， 全局变量a由var命令声明， 所以它是全局对象的属性； 全局变量b由let命令声明， 所以它不是全局对象的属性， 返回undefined。