// 交换变量
let x = 1,
    y = 2;
[x, y] = [y, x];
console.log(x, y);

// 从函数返回多个值

function example() {
    return [1, 2, 3];
}

var [a, b, c] = example();

console.log(a, b, c);

function example2() {
    return {
        foo: 1,
        bar: 2
    };
}

var {
    foo,
    bar
} = example2();
console.log(foo, bar);

// 函数参数的定义

// 有序
function f([x, y, z]) {
    console.log(x, y, z);
}

f([1, 2, 3]);

// 无序
function f2({
    x,
    y,
    z
}) {
    console.log(x, y, z);
}

f2({
    z: 3,
    y: 2,
    x: 1
});

// 快速提取json数据
var jsonData = {
    id: 42,
    status: 'OK',
    data: [867, 5309]
}

let {
    id,
    status,
    data: number
} = jsonData;

console.log(id, status, number);

// 函数默认值

var jqueryAjax = function(url, {
    async = true,
    beforeSend = function() {},
        cache = ture,
        complete = function() {},
        crossDomain = false,
        global = true
}) {

};

// 遍历MAP结构

var map = new Map();

map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
    console.log(key + " is " + value)
}

for (let [key] of map) {
    console.log("key is :" + key)
}

for (let [, value] of map) {
    console.log("value is :" + value)
}

// 指定输入模块的方法
// const { SourceMapConsumer, SourceNode } = require("source-map");