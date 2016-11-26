function f(arg) {
    var n = function() {
        return arg;
    }
    arg++;
    return n;
}

var m = f(123);

console.log(m());
