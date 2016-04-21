'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var a = 1;
var b = 2;
var c = 3;
var foo = 1;
var bar = 2;
var baz = 3;
var _ref = ['foo', 'bar', 'baz'];
var third = _ref[2];
var _ref2 = [1, 2, 3];
var x = _ref2[0];
var y = _ref2[2];
var head = 1;
var tail = [2, 3, 4, 5, 6];


{
    var _ref3 = ['a'];
    var _x = _ref3[0];
    var _y = _ref3[1];

    var z = _ref3.slice(2);

    _x; // "a"
    _y; // undefined
    z; // []
}

// 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。

// 报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

{
    var _ref4 = new Set(['a', 'b', 'c']);

    var _ref5 = _slicedToArray(_ref4, 3);

    var _x2 = _ref5[0];
    var _y2 = _ref5[1];
    var _z = _ref5[2];
}

// function* fibs() {
//     var a = 0;
//     var b = 1;
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b];
//     }
// }

// {

//     let [first, second, third, fourth, fifth, sixth] = fibs();
//     console.log(sixth);
// }
{
    var _ref6 = [];
    var _ref6$ = _ref6[0];

    var _foo = _ref6$ === undefined ? true : _ref6$;

    console.log(_foo);
}

{
    var _ref7 = ['a'];
    var _x3 = _ref7[0];
    var _ref7$ = _ref7[1];

    var _y3 = _ref7$ === undefined ? 'b' : _ref7$;

    console.log(_x3, _y3);
}

// var [foo = true] = [];
// foo // true

// [x, y = 'b'] = ['a'] // x='a', y='b'
// [x, y = 'b'] = ['a', undefined] // x='a', y='b'
// 注意，ES6内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。

// var [x = 1] = [undefined];
// x // 1

// var [x = 1] = [null];
// x // null
// 上面代码中，如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。

// 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
// 上面代码中，因为x能取到值，所以函数f根本不会执行。上面的代码其实等价于下面的代码。
// {
//     var f = function f() {
//         console.log('aaa');
//     };

//     var _ = 1;

//     var _x4 = _ === undefined ? f() : _;
// }
{
    var f = function f() {
        console.log('aaa');
    };

    var _ = 1;

    var _x4 = _ === undefined ? f() : _;
}

// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。

// let [x = 1, y = x] = [];     // x=1; y=1
// let [x = 1, y = x] = [2];    // x=2; y=2
// let [x = 1, y = x] = [1, 2]; // x=1; y=2
// let [x = y, y = 1] = [];     // ReferenceError

// 上面最后一个表达式之所以会报错，是因为x用到默认值y时，y还没有声明。