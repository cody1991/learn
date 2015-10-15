var toString = Object.prototype.toString;
var isType = function(type) {
    return function(obj) {
        return toString.call(obj) == '[object ' + type + ']';
    }
}

var isString = isType('String');
var isFunction = isType('Function');

console.log(isString('123'));
console.log(isFunction(isString));
