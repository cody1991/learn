// 这个题目的答案几乎和前一个问题一样，但是你需要用更加符合 Node.js
//   的风格的方式解决：异步。

//   你将要使用 fs.readFile() 方法，而不是
//   fs.readFileSync()，并且你需要从你所传入的回调函数中去收集数据（这些数据会
//   作为第二参数传递给你的回调函数），而不是使用方法的返回值。想要学习更多关于
//   回调函数的知识，请查阅：[https://github.com/maxogden/art-of-node#callbacks
//   。](https://github.com/maxogden/art-of-node#callbacks。)

//   记住，我们习惯中的 Node.js 回调函数都有像如下所示的特征：

//      function callback (err, data) { /* ... */ }

//   所以，你可以通过检查第一个参数的真假值来判断是否有错误发生。如果没有错误发
//   生，你会在第二个参数中获取到一个 Buffer 对象。和 readFileSync()
//   一样，你可以传入 'utf8'
//   作为它的第二个参数，然后把回调函数作为第三个参数，这样，你得到的将会是一个
//   字符串，而不是 Buffer。

//   fs 模块的文档可以通过使用你的浏览器访问如下路径来查看：
//   file://C:\Users\cody\AppData\Roaming\npm\node_modules.learnyounode_npminst
//   all\learnyounode\3.5.5\learnyounode\node_apidoc\fs.html


var fs = require('fs');

var fileUrl = process.argv[2];

fs.readFile(fileUrl, 'utf-8', function(err, data) {
    if (err) {
        return;
    } else {
        console.log(data.split(/\n/).length - 1)
    }
});

// console.log(fileUrl);


// var fs = require('fs')
//     var file = process.argv[2]

//     fs.readFile(file, function (err, contents) {
//       // 你也可以使用 fs.readFile(file, 'utf8', callback)
//       var lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })
