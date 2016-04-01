function add([x, y]) {
    return x + y;
}

// 上面代码中，函数add的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y。对于函数内部的代码来说，它们能感受到的参数就是x和y。
console.log(add([1, 2]));

function move({
    x = 0, y = 0
} = {}) {
    return [x, y];
}

console.log(move({
    x: 3,
    y: 8
}));

console.log(move({
    x: 3
}));

console.log(move({

}));

console.log(move());

function move2({
    x, y
} = {
    x: 0,
    y: 0
}) {
    return [x, y];
}

console.log(move2({
    x: 3,
    y: 8
}));

console.log(move2({
    x: 3
}));

console.log(move2({}));

console.log(move2());

[1, undefined, 3].map((x = 'yes') => console.log(x));