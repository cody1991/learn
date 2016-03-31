var [a, b, c] = [1, 2, 3];

let [foo, [
    [bar], baz
]] = [1, [
    [2], 3
]]

let [, , third] = ['foo', 'bar', 'baz'];

let [x, , y] = [1, 2, 3]

let [head, ...tail] = [1, 2, 3, 4, 5, 6]

{
    let [x, y, ...z] = ['a']
    x // "a"
    y // undefined
    z // []
}

// 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。

// 报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

{
    let [x, y, z] = new Set(['a', 'b', 'c'])
}

// function* fibs() {
//     var a = 0;
//     var b = 1;
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b];
//     }
// }

// {

//     let [first, second, third, fourth, fifth, sixth] = fibs();
//     console.log(sixth);
// }
{
    let [foo = true] = [];
    console.log(foo);
}

{
    let [x, y = 'b'] = ['a'];
    console.log(x, y);
}

// var [foo = true] = [];
// foo // true

// [x, y = 'b'] = ['a'] // x='a', y='b'
// [x, y = 'b'] = ['a', undefined] // x='a', y='b'
// 注意，ES6内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。

// var [x = 1] = [undefined];
// x // 1

// var [x = 1] = [null];
// x // null
// 上面代码中，如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。



// 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
// 上面代码中，因为x能取到值，所以函数f根本不会执行。上面的代码其实等价于下面的代码。
// {
//     var f = function f() {
//         console.log('aaa');
//     };

//     var _ = 1;

//     var _x4 = _ === undefined ? f() : _;
// }
{
    function f() {
        console.log('aaa');
    }

    let [x = f()] = [1];
}

// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。

// let [x = 1, y = x] = [];     // x=1; y=1
// let [x = 1, y = x] = [2];    // x=2; y=2
// let [x = 1, y = x] = [1, 2]; // x=1; y=2
// let [x = y, y = 1] = [];     // ReferenceError

// 上面最后一个表达式之所以会报错，是因为x用到默认值y时，y还没有声明。