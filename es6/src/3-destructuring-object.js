var {
    foo, bar
} = {
    foo: 'aaa',
    bar: 'bbb'
};
// ---
var {
    foo: baz
} = {
    foo: 'aaa',
    bar: 'bbb'
};

let obj = {
    first: 'hello',
    last: 'world'
}
let {
    first: f,
    last: l
} = obj


// 也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

var {
    foo: baz
} = {
    foo: "aaa",
    bar: "bbb"
};
// baz // "aaa"
// foo // error: foo is not defined
// 上面代码中，真正被赋值的是变量baz，而不是模式foo。

{
    let obj = {
        p: [
            "Hello", {
                y: "World"
            }
        ]
    };

    let {
        p: [x, {
            y
        }]
    } = obj;
}

{
    let {
        log, sin, cos
    } = Math;
}