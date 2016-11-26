// function factory(name) {
//     return {
//         name: name
//     }
// }

// var o = factory('one');

// console.log(o.name);
// console.log(o.constructor);

function C() {
    this.a = 1;
}

var c = new C();
console.log(c.a);

function C2() {
    this.a = 1;
    return {
        b: 2
    };
}

var c2 = new C2();
console.log(typeof c2.a);
console.log(c2.b);
// 如果主动返回一个对象的时候，他不是返回this而是这个对象
// 如果是一个非对象类型，返回this对象
