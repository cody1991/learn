"use strict";

var _ = 123;
var s = _.toString;


console.log(s === Number.prototype.toString);

var _true = true;
var s2 = _true.toString;


console.log(s2 === Boolean.prototype.toString);

// 解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

// let { prop: x } = undefined; // TypeError
// let { prop: y } = null; // TypeError