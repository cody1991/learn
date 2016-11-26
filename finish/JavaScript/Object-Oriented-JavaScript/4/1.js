function Hero(name) {
    this.name = name;
}

var h2 = new Hero('cody');

console.log(typeof h2);
console.log(h2.name);

// 同时赋予该对象特殊属性--构造器属性。
// 该属性是一个指向用于创建该对象的构造器函数的引用。
console.log(h2.constructor);

var o = {};
console.log(o.constructor);
console.log(typeof o.constructor);

console.log(h2 instanceof Hero);
console.log(h2 instanceof Object);
console.log(o instanceof Object);
