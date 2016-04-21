'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _foo$bar = {
    foo: 'aaa',
    bar: 'bbb'
};
var foo = _foo$bar.foo;
var bar = _foo$bar.bar;
// ---

var _foo$bar2 = {
    foo: 'aaa',
    bar: 'bbb'
};
var baz = _foo$bar2.foo;


var obj = {
    first: 'hello',
    last: 'world'
};
var f = obj.first;
var l = obj.last;

// 也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

var _foo$bar3 = {
    foo: "aaa",
    bar: "bbb"
};
var baz = _foo$bar3.foo;
// baz // "aaa"
// foo // error: foo is not defined
// 上面代码中，真正被赋值的是变量baz，而不是模式foo。

{
    var _obj = {
        p: ["Hello", {
            y: "World"
        }]
    };

    var _obj$p = _slicedToArray(_obj.p, 2);

    var x = _obj$p[0];
    var y = _obj$p[1].y;
}

{
    var log = Math.log;
    var sin = Math.sin;
    var cos = Math.cos;
}