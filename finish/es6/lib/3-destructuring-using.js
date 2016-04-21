'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// 交换变量
var x = 1,
    y = 2;
var _ref = [y, x];
x = _ref[0];
y = _ref[1];

console.log(x, y);

// 从函数返回多个值

function example() {
    return [1, 2, 3];
}

var _example = example();

var _example2 = _slicedToArray(_example, 3);

var a = _example2[0];
var b = _example2[1];
var c = _example2[2];


console.log(a, b, c);

function example2() {
    return {
        foo: 1,
        bar: 2
    };
}

var _example3 = example2();

var foo = _example3.foo;
var bar = _example3.bar;

console.log(foo, bar);

// 函数参数的定义

// 有序
function f(_ref2) {
    var _ref3 = _slicedToArray(_ref2, 3);

    var x = _ref3[0];
    var y = _ref3[1];
    var z = _ref3[2];

    console.log(x, y, z);
}

f([1, 2, 3]);

// 无序
function f2(_ref4) {
    var x = _ref4.x;
    var y = _ref4.y;
    var z = _ref4.z;

    console.log(x, y, z);
}

f2({
    z: 3,
    y: 2,
    x: 1
});

// 快速提取json数据
var jsonData = {
    id: 42,
    status: 'OK',
    data: [867, 5309]
};

var id = jsonData.id;
var status = jsonData.status;
var number = jsonData.data;


console.log(id, status, number);

// 函数默认值

var jqueryAjax = function jqueryAjax(url, _ref5) {
    var _ref5$async = _ref5.async;
    var async = _ref5$async === undefined ? true : _ref5$async;
    var _ref5$beforeSend = _ref5.beforeSend;
    var beforeSend = _ref5$beforeSend === undefined ? function () {} : _ref5$beforeSend;
    var _ref5$cache = _ref5.cache;
    var cache = _ref5$cache === undefined ? ture : _ref5$cache;
    var _ref5$complete = _ref5.complete;
    var complete = _ref5$complete === undefined ? function () {} : _ref5$complete;
    var _ref5$crossDomain = _ref5.crossDomain;
    var crossDomain = _ref5$crossDomain === undefined ? false : _ref5$crossDomain;
    var _ref5$global = _ref5.global;
    var global = _ref5$global === undefined ? true : _ref5$global;
};

// 遍历MAP结构

var map = new Map();

map.set('first', 'hello');
map.set('second', 'world');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2);

        var key = _step$value[0];
        var value = _step$value[1];

        console.log(key + " is " + value);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _step2$value = _slicedToArray(_step2.value, 1);

        var key = _step2$value[0];

        console.log("key is :" + key);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = map[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _step3$value = _slicedToArray(_step3.value, 2);

        var value = _step3$value[1];

        console.log("value is :" + value);
    }

    // 指定输入模块的方法
    // const { SourceMapConsumer, SourceNode } = require("source-map");
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}