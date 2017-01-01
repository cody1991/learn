'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function add(_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var x = _ref2[0];
    var y = _ref2[1];

    return x + y;
}

// 上面代码中，函数add的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y。对于函数内部的代码来说，它们能感受到的参数就是x和y。
console.log(add([1, 2]));

function move() {
    var _ref3 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref3$x = _ref3.x;
    var x = _ref3$x === undefined ? 0 : _ref3$x;
    var _ref3$y = _ref3.y;
    var y = _ref3$y === undefined ? 0 : _ref3$y;

    return [x, y];
}

console.log(move({
    x: 3,
    y: 8
}));

console.log(move({
    x: 3
}));

console.log(move({}));

console.log(move());

function move2() {
    var _ref4 = arguments.length <= 0 || arguments[0] === undefined ? {
        x: 0,
        y: 0
    } : arguments[0];

    var x = _ref4.x;
    var y = _ref4.y;

    return [x, y];
}

console.log(move2({
    x: 3,
    y: 8
}));

console.log(move2({
    x: 3
}));

console.log(move2({}));

console.log(move2());

[1, undefined, 3].map(function () {
    var x = arguments.length <= 0 || arguments[0] === undefined ? 'yes' : arguments[0];
    return console.log(x);
});