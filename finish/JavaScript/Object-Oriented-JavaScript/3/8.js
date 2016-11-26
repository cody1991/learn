function f() {
    var a = [];
    var i;

    for (i = 0; i < 3; i++) {
        a[i] = (function(x) {
            return function() {
                return x;
            }
        })(i);
    }

    return a;
}

var a = f();

console.log(a[0]());
console.log(a[1]());
console.log(a[2]());
