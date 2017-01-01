var fibonacci = function(n) {
    if (typeof n !== 'number') {
        throw new Error('n should be a Number');
    }

    if (n < 0) {
        throw new Error('n should >= 0');
    }

    if (n > 10) {
        throw new Error('n should <= 10');
    }

    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

exports.fibonacci = fibonacci;

// When a file is run directly from Node, require.main is set to its module. 
// Node.js 平台，当一个文件直接运行，此文件中，require.main === module ， 为true.
// 由些可以判断 一个文件是直接运行，还是被别的模块调用， 这在testing 中经常用到。

if (require.main === module) {
    // 如果是直接执行 main.js，则进入此处
    // 如果 main.js 被其他文件 require，则此处不会执行。
    var n = Number(process.argv[2]);
    console.log('fibonacci(' + n + ') is', fibonacci(n));
}
