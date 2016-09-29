function invoke_and_add(a, b) {
    return a() + b();
}

function one() {
    return 1;
}

function two() {
    return 2;
}

console.log(invoke_and_add(one, two));

console.log(invoke_and_add(function() {
    return 1;
}, function() {
    return 2;
}));

// 函数A传给函数B B来执行A A就成了一个回调函数 A没有名字的话叫做匿名回调函数
