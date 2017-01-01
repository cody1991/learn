'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _math = require('./math');

Object.keys(_math).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _math[key];
        }
    });
});

exports.default = function (x) {
    console.log('default');
    return Math.exp(x);
};

var e = exports.e = 2.71828182846;