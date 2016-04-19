// Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
}

var arr1 = [].slice.call(arrayLike);

console.log(arr1);

var arr2 = Array.from(arrayLike);

console.log(arr2);

// let ps = document.querySelectorAll('p');
// Array.from(ps).forEach(function(p) {
//     console.log(p);
// })

// function foo() {
//     var args = Array.from(arguments);
// }

console.log(Array.from('hello'));

let namesSet = new Set(['a', 'b']);
console.log(Array.from(namesSet));

// 值得提醒的是，扩展运算符（...）也可以将某些数据结构转为数组。

function foo() {
    var args = [...arguments];
}

// NodeList对象
// [...document.querySelectorAll('div')]


// 扩展运算符背后调用的是遍历器接口（Symbol.iterator），如果一个对象没有部署这个接口，就无法转换。Array.from方法则是还支持类似数组的对象。所谓类似数组的对象，本质特征只有一点，即必须有length属性。因此，任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换。
console.log(Array.from({
    length: 3
}));


const toArray = (() =>
    Array.from ? Array.from : obj => [].slice.call(obj)
)()


// Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。

let arrayLike2 = {
    '1': 1,
    '2': 2,
    '3': 3
}

console.log(arrayLike2);
console.log(Array.from(arrayLike2, x => x * x))


// var spans = document.querySelectorAll('span.name');
// let names1 = Array.prototype.map.call(spans,s => s.textContent);
// let names2 = Array.from(spans,s => s.textContent);

// 下面的例子将数组中布尔值为false的成员转为0。


console.log(Array.from([1, 2, 3], (n) => n || 0))

function typesOf() {
    return Array.from(arguments, value => typeof value)
}

console.log(typesOf(null, [], NaN));



//    Array.of()

// Array.of方法用于将一组值，转换为数组。

Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1

// 这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。

// Array() // []
// Array(3) // [, , ,]
// Array(3, 11, 8) // [3, 11, 8]

// 上面代码中，Array方法没有参数、一个参数、三个参数时，返回结果都不一样。只有当参数个数不少于2个时，Array()才会返回由参数组成的新数组。参数个数只有一个时，实际上是指定数组的长度。

// Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一。

Array.of() // []
Array.of(undefined) // [undefined]
Array.of(1) // [1]
Array.of(1, 2) // [1, 2]

// Array.of总是返回参数值组成的数组。如果没有参数，就返回一个空数组。

// Array.of方法可以用下面的代码模拟实现。

function ArrayOf() {
    return [].slice.call(arguments);
}


// 数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。

// Array.prototype.copyWithin(target,start=0,end=this.length)

// target（必需）：从该位置开始替换数据。
// start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
// end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。

// 上面代码表示将从3号位直到数组结束的成员（4和5），复制到从0号位开始的位置，结果覆盖了原来的1和2。
// console.log([1, 2, 3, 4, 5].copyWithin(0, 3));

// 将3号位复制到0号位
// [1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

// -2相当于3号位，-1相当于4号位
// [(1, 2, 3, 4, 5)].copyWithin(0, -2, -1);
// [4, 2, 3, 4, 5]

// 将3号位复制到0号位
// [].copyWithin.call({
//     length: 5,
//     3: 1
// }, 0, 3);
// {0: 1, 3: 1, length: 5}

// 将2号位到数组结束，复制到0号位
// var i32a = new Int32Array([1, 2, 3, 4, 5]);
// i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// 对于没有部署TypedArray的copyWithin方法的平台
// 需要采用下面的写法
// [].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]

// 数组实例的find()和findIndex()

// 数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。

console.log([1, 4, -5, 10].find((n) => n < 0))

// 上面代码中，find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
console.log([1, 5, 10, 15].find(function(value, index, arr) {
    return value > 9
}));

// 数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。

console.log([1, 5, 10, 15].findIndex(function(value, index, arr) {
    return value > 9;
}));

console.log([NaN].indexOf(NaN));
console.log([NaN].findIndex(y => Object.is(NaN, y)));

// fill方法使用给定值，填充一个数组。

console.log(['a', 'b', 'c'].fill(7));
// [7, 7, 7]

new Array(3).fill(7)
    // [7, 7, 7]

// fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。

console.log(['a', 'b', 'c'].fill(7, 1, 2));
// ['a', 7, 'c']

// 数组推导

// 数组推导（array comprehension）提供简洁写法，允许直接通过现有数组生成新数组。这项功能本来是要放入ES6的，但是TC39委员会想继续完善这项功能，让其支持所有数据结构（内部调用iterator对象），不像现在只支持数组，所以就把它推迟到了ES7。Babel转码器已经支持这个功能。
// var a1 = [1, 2, 3, 4];
// var a2 = [for (i of a1) i * 2];

// a2 // [2, 4, 6, 8]