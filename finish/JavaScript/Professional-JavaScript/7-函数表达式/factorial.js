var factorial = function f(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * f(num - 1);
    }
}

console.log(factorial(10));

var anotherFac = factorial;

console.log(anotherFac(10));
