function hello() {
    console.log('Hello World');
}

function hello2() {
    console.log('Hello World 2');
}

// 原因是最后调用 hello() 的时候，这个 hello 是个 undefined . 这说明，虽然我们依赖了一个js库（它会被载入），但requirejs无法从中拿到代表它的对象注入进来供我们使用。

// 在这种情况下，我们要使用 shim ，将某个依赖中的某个全局变量暴露给requirejs，当作这个模块本身的引用。

// 它定义了两个函数，而我两个都想要。这时就不能再用 exports 了，必须换成 init 函数：