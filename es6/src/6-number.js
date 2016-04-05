'use strict';

// ES6提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示。

console.log(503 === 503); // true
console.log(503 === 503); // true

// 从ES5开始，在严格模式之中，八进制就不再允许使用前缀0表示，ES6进一步明确，要使用前缀0o表示。

// 如果要将0b和0x前缀的字符串数值转为十进制，要使用Number方法。

console.log(Number('0b111'));
console.log(Number('0o10'));

// ES6在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法，用来检查Infinite和NaN这两个特殊值。

// Number.isFinite()用来检查一个数值是否非无穷（infinity）。


// (function(global) {
//     console.log(global);
//     var global_isFinite = global.isFinite;
//     console.log(global_isFinite);

//     Object.defineProperty(Number, 'isFinite', {
//         value: function isFinite(value) {
//             return typeof value === 'number' && global_isFinite(value);
//         },
//         configurable: true,
//         enumerable: false,
//         writable: true
//     })

// })(this);


// Number.isFinite(15); // true
// Number.isFinite(0.8); // true
// Number.isFinite(NaN); // false
// Number.isFinite(Infinity); // false
// Number.isFinite(-Infinity); // false
// Number.isFinite('foo'); // false
// Number.isFinite('15'); // false
// Number.isFinite(true); // false


// (function(global) {
//     var global_isNaN = global.isNaN;

//     Object.defineProperty(Number, 'isNaN', {
//         value: function isNaN(value) {
//             return typeof value === 'number' && global_isNaN(value);
//         },
//         configurable: true,
//         enumerable: false,
//         writable: true
//     })
// })(this);

// 它们与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效，非数值一律返回false。
// isFinite(25) // true
// isFinite("25") // true
// Number.isFinite(25) // true
// Number.isFinite("25") // false

// isNaN(NaN) // true
// isNaN("NaN") // true
// Number.isNaN(NaN) // true
// Number.isNaN("NaN") // false

// -----------------------------------------------

// ES6将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。


// ES5的写法
parseInt('12.34'); // 12
parseFloat('123.45#'); // 123.45

// ES6的写法
Number.parseInt('12.34'); // 12
Number.parseFloat('123.45#'); // 123.45


// Number.isInteger()用来判断一个值是否为整数。需要注意的是，在JavaScript内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。

// Number.isInteger(25) // true
// Number.isInteger(25.0) // true
// Number.isInteger(25.1) // false
// Number.isInteger("15") // false
// Number.isInteger(true) // false

// (function(global) {
//     var floor = Math.floor,
//         isFinite = global.isFinite;

//     Object.defineProperty(Number, 'isInteger', {
//         value: function isInteger(value) {
//             return typeof value === 'number' && isFinite(value) && value > -9007199254740992 && value < 9007199254740992 && floor(value) === value;
//         },
//         configurable: true,
//         enumerable: false,
//         writable: true
//     });
// })(this);



// ES6在Number对象上面，新增一个极小的常量Number.EPSILON。

console.log(Number.EPSILON);
// 2.220446049250313e-16
console.log(Number.EPSILON.toFixed(20));
// '0.00000000000000022204'
// 引入一个这么小的量的目的，在于为浮点数计算，设置一个误差范围。我们知道浮点数计算是不精确的。

console.log(0.1 + 0.2);

console.log(0.1 + 0.2 - 0.3);

console.log((0.1 + 0.2 - 0.3).toFixed(20));

// 但是如果这个误差能够小于Number.EPSILON，我们就可以认为得到了正确结果。

function withinErrorMargin(left, right) {
    return Math.abs(left - right) < Number.EPSILON;
}


console.log(withinErrorMargin(0.1 + 0.2, 0.3));
console.log(withinErrorMargin(0.2 + 0.2, 0.3));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1);
console.log(Number.MAX_SAFE_INTEGER === -Number.MIN_SAFE_INTEGER);


console.log(Number.isSafeInteger('a'))

// Number.isSafeInteger('a') // false
// Number.isSafeInteger(null) // false
// Number.isSafeInteger(NaN) // false
// Number.isSafeInteger(Infinity) // false
// Number.isSafeInteger(-Infinity) // false

// Number.isSafeInteger(3) // true
// Number.isSafeInteger(1.2) // false
// Number.isSafeInteger(9007199254740990) // true
// Number.isSafeInteger(9007199254740992) // false

// Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1) // false
// Number.isSafeInteger(Number.MIN_SAFE_INTEGER) // true
// Number.isSafeInteger(Number.MAX_SAFE_INTEGER) // true
// Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1) // false


// 注意， 验证运算结果是否落在安全整数的范围时， 不要只验证运算结果， 而要同时验证参与运算的每个值。

// Number.isSafeInteger(9007199254740993)
// // false
// Number.isSafeInteger(990)
// // true
// Number.isSafeInteger(9007199254740993 - 990)
// // true
// 9007199254740993 - 990
// // 返回结果 9007199254740002
// // 正确答案应该是 9007199254740003
// 上面代码中，9007199254740993不是一个安全整数，但是Number.isSafeInteger会返回结果，显示计算结果是安全的。这是因为，这个数超出了精度范围，导致在计算机内部，以9007199254740992的形式储存。


// 9007199254740993 === 9007199254740992
// true

// 所以，如果只验证运算结果是否为安全整数，很可能得到错误结果。下面的函数可以同时验证两个运算数和运算结果。


function trusty(left, right, result) {
    if (Number.isSafeInteger(left) && Number.isSafeInteger(right) && Number.isSafeInteger(result)) {
        return result;
    }
    // throw new RangeError('Operation cannot be trusted!');
}

console.log('EXAMPLE1 : ');
console.log(trusty(9007199254740993, 990, 9007199254740993 - 990));
console.log('EXAMPLE2 : ');
console.log(trusty(1, 2, 3));


// ES6在Math对象上新增了17个与数学相关的方法。所有这些方法都是静态方法，只能在Math对象上调用。

// Math.trunc方法用于去除一个数的小数部分，返回整数部分。

console.log(Math.trunc(-4.9));

// 对于非数值，Math.trunc内部使用Number方法将其先转为数值。

console.log(Math.trunc('123.456'));
// 123

// 对于空值和无法截取整数的值，返回NaN。

console.log(Math.trunc(NaN)); // NaN
console.log(Math.trunc('foo')); // NaN
console.log(Math.trunc()); // NaN

Math.trunc = Math.trunc || function(x) {
    return x < 0 ? Math.ceil(x) : Math.floor(x);
}


// Math.sign方法用来判断一个数到底是正数、负数、还是零。

// 它会返回五种值。

// 参数为正数， 返回 + 1；
// 参数为负数，返回-1；
// 参数为0，返回0；
// 参数为-0，返回-0;
// 其他值，返回NaN。
// Math.sign(-5) // -1
// Math.sign(5) // +1
// Math.sign(0) // +0
// Math.sign(-0) // -0
// Math.sign(NaN) // NaN
// Math.sign('foo'); // NaN
// Math.sign();      // NaN

console.log(Math.sign(-5));

Math.sign = Math.sign || function(x) {
    x = +x;
    if (x === 0 || isNaN(x)) {
        return x;
    }
    return x > 0 ? 　1 : -1;
}

console.log(Math.cbrt(-1));

// Math.cbrt方法用于计算一个数的立方根。

// Math.cbrt(-1) // -1
// Math.cbrt(0)  // 0
// Math.cbrt(1)  // 1
// Math.cbrt(2)  // 1.2599210498948734
// 对于非数值，Math.cbrt方法内部也是先使用Number方法将其转为数值。

// Math.cbrt('8') // 2
// Math.cbrt('hello') // NaN

Math.cbrt = Math.cbrt || function(x) {
    var y = Math.pow(Math.abs(x), 1 / 3);
    return x < 0 ? -y : y;
}


// Math.hypot方法返回所有参数的平方和的平方根。

// Math.hypot(3, 4);        // 5
// Math.hypot(3, 4, 5);     // 7.0710678118654755
// Math.hypot();            // 0
// Math.hypot(NaN);         // NaN
// Math.hypot(3, 4, 'foo'); // NaN
// Math.hypot(3, 4, '5');   // 7.0710678118654755
// Math.hypot(-3);          // 3


// Math.expm1(x) 返回ex - 1， 即Math.exp(x) - 1。

// Math.expm1(-1); // -0.6321205588285577
// Math.expm1(0);  // 0
// Math.expm1(1);  // 1.718281828459045
// 对于没有部署这个方法的环境，可以用下面的代码模拟。

// Math.expm1 = Math.expm1 || function(x) {
//   return Math.exp(x) - 1;
// };


// Math.log1p()

// Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN。

// Math.log1p(1);  // 0.6931471805599453
// Math.log1p(0);  // 0
// Math.log1p(-1); // -Infinity
// Math.log1p(-2); // NaN
// 对于没有部署这个方法的环境，可以用下面的代码模拟。

// Math.log1p = Math.log1p || function(x) {
//   return Math.log(1 + x);
// };


// Math.log10(x) 返回以10为底的x的对数。 如果x小于0， 则返回NaN。

// Math.log10(2);      // 0.3010299956639812
// Math.log10(1);      // 0
// Math.log10(0);      // -Infinity
// Math.log10(-2);     // NaN
// Math.log10(100000); // 5
// 对于没有部署这个方法的环境，可以用下面的代码模拟。

// Math.log10 = Math.log10 || function(x) {
//   return Math.log(x) / Math.LN10;
// };


// Math.log2(x) 返回以2为底的x的对数。 如果x小于0， 则返回NaN。

// Math.log2(3)    // 1.584962500721156
// Math.log2(2)    // 1
// Math.log2(1)    // 0
// Math.log2(0)    // -Infinity
// Math.log2(-2)   // NaN
// Math.log2(1024) // 10
// Math.log2(1 << 29) // 29
// 对于没有部署这个方法的环境，可以用下面的代码模拟。

// Math.log2 = Math.log2 || function(x) {
//   return Math.log(x) / Math.LN2;
// };


// Math.sinh(x) 返回x的双曲正弦（ hyperbolic sine）
// Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
// Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
// Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
// Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
// Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）


// ES7新增了一个指数运算符（**），目前Babel转码器已经支持。


// console.log(2 ** 2);

// 指数运算符可以与等号结合，形成一个新的赋值运算符（**=）。

// let a = 2;
// a **= 2;

// 等同于 a = a * a;

// let b = 3;
// b **= 3;
// 等同于 b = b * b * b;