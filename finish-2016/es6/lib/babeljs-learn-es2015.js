'use strict';

var _math = require('./math');

var math = _interopRequireWildcard(_math);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var evens = [2, 4, 6, 8, 10];

var odds = evens.map(function (v) {
    return v + 1;
});

console.log(odds);

var nums = evens.map(function (v, i) {
    return v + i;
});

console.log(nums);

var numss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var fives = [];

numss.forEach(function (v) {
    if (v % 5 === 0) fives.push(v);
});

console.log(fives);

var bob = {
    _name: 'Bob',
    _friends: [],
    printFriends: function printFriends() {
        var _this = this;

        this._friends.forEach(function (f) {
            return console.log(_this._name + ' knows ' + f);
        });
    },
    pushFriends: function pushFriends(arrays) {
        this._friends.push(arrays);
    }
};

bob.pushFriends(['tang', 'ze', 'xiong']);

bob.printFriends();

var name = 'Bob',
    time = 'today';

console.log('Hello ' + name + ',how are you ' + time);

var _ref = [1, 2, 3];
var a = _ref[0];
var b = _ref[1];


console.log(a);
console.log(b);

function f(x) {
    return x * (arguments.length - 1);
}

console.log(f(3, 'hello', true) == 6);

function f2(x, y, z) {
    return x + y + z;
}

console.log(f2.apply(undefined, [1, 2, 3]));

var fibonacci = _defineProperty({}, Symbol.iterator, function () {
    var pre = 0,
        cur = 1;

    return {
        next: function next() {
            var _ref2 = [cur, pre + cur];
            pre = _ref2[0];
            cur = _ref2[1];

            return {
                done: false,
                value: cur
            };
        }
    };
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = fibonacci[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var n = _step.value;

        if (n > 100) break;
        console.log(n);
    }

    // let fibonacci2 = {
    //     [Symbol.iterator]: function*() {
    //         var pre = 0,
    //             cur = 1;

    //         for (;;) {
    //             var temp = pre;
    //             pre = cur;
    //             cur += temp;
    //             yield cur;
    //         }
    //     }
    // }

    // for (var n of fibonacci2) {
    //     if (n > 100)
    //         break;
    //     console.log(n);
    // }
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

console.log("𠮷".length);

console.log("𠮷".match(/./)[0].length);
console.log("𠮷".match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/)[0].length);

console.log('𠮷' == "𠮷");
console.log('𠮷' == "𠮷");

console.log("𠮷".codePointAt(0) == 0x20BB7);

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = "𠮷"[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var c = _step2.value;

        console.log(c);
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

console.log("2π = " + math.sum(math.pi, math.pi));