function f() {
    function makeClosure(x) {
        return function() {
            return x;
        }
    }
    var a = [];
    var i;

    for (i = 0; i < 3; i++) {
        a[i] = makeClosure(i);
    }

    return a;
}

var a = f(3);
console.log(a[0]());
console.log(a[1]());
console.log(a[2]());
