var o = new Object();

// toString() 会在某些需要用字符串表示对象的时候被js内部调用。
console.log(o.toString());

var a = new Array(1, 2, 3, '4');

console.log(typeof a);
console.log(a.toString());
console.log(a.valueOf());
console.log(a.constructor);

function myFunc(a) {
    return a;
}

console.log(myFunc.constructor);
console.log(myFunc.length);

function A() {
    console.log(A.caller);
    return A.caller;
}

function B() {
    return A();
}
B(); // => [Function: B]
A(); // => [Function]   null
