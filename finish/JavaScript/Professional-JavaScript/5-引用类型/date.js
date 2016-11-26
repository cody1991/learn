var now = new Date();

console.log(now);

// var someDay =
console.log(new Date(Date.parse('May 25,2004')));
console.log(new Date(Date.parse('6/13/2004')));

console.log(Date.parse('6/13/2004'));

// console.log(Date.now());

var start = +now;

// +可以把Date对象转换成字符串

console.log(start);

var stop = +new Date();

console.log(stop - start);

console.log(now.getTime());
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
