// NodeJS通过fs内置模块提供对文件的操作。fs模块提供的API基本上可以分为以下三类：

// 文件属性读写。

// 其中常用的有fs.stat、fs.chmod、fs.chown等等。

// 文件内容读写。

// 其中常用的有fs.readFile、fs.readdir、fs.writeFile、fs.mkdir等等。

// 底层文件操作。

// 其中常用的有fs.open、fs.read、fs.write、fs.close等等。

// fs.readFile(pathname, function (err, data) {
//     if (err) {
//         // Deal with error.
//     } else {
//         // Deal with data.
//     }
// });


// 如上边代码所示，基本上所有fs模块API的回调参数都有两个。第一个参数在有错误发生时等于异常对象，第二个参数始终用于返回API方法执行结果。

// 此外，fs模块的所有异步API都有对应的同步版本，用于无法使用异步操作时，或者同步操作更方便时的情况。同步API除了方法名的末尾多了一个Sync之外，异常对象与执行结果的传递方式也有相应变化。同样以fs.readFileSync为例


// try {
//     var data = fs.readFileSync(pathname);
//     // Deal with data.
// } catch (err) {
//     // Deal with error.
// }