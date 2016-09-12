// fs.readdir()
//   方法接收两个参数：第一个是一个路径，第二个则是回调函数，这个回调函数会有如
//   下特征：

//      function callback (err, list) { /* ... */ }

//   这里的 list 是一个数组，它所包含的元素是每个文件的文件名（字符串形式）。

//   fs 的文档你可以用浏览器访问
//   file://C:\Users\cody\AppData\Roaming\npm\node_modules.learnyounode_npminst
//   all\learnyounode\3.5.5\learnyounode\node_apidoc\fs.html 来阅读。

//   你可能会发现 node 自带的 path 模块也很有用，特别是它那个 extname 方法。

//   同样，你也可以通过浏览器访问
//   file://C:\Users\cody\AppData\Roaming\npm\node_modules.learnyounode_npminst
//   all\learnyounode\3.5.5\learnyounode\node_apidoc\path.html 来阅读 path
//   模块的文档。


var fs = require('fs');
var path = require('path');

// 使用 path.extname();

var dirUrl = process.argv[2],
    rule = process.argv[3];

// fs.readdir(dirUrl, function(err, list) {
//     if (err) {
//         return;
//     } else {
//         for (var i = 0; i < list.length; i++) {

//             if (list[i].indexOf('.' + rule) > 0) {
//                 console.log(list[i]);
//             }
//         }
//     }
// });

fs.readdir(dirUrl, function(err, list) {
    if (err) {
        return console.error(err);
    } else {
        list.forEach(function(l) {
            if (path.extname(l) === '.' + rule) {
                console.log(l);
            }
        })
    }
});
