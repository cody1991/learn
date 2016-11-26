// 完成这个练习，你需要使用 Node.js 核心模块之一：http。

//   你可以使用浏览器访问
//   file://C:\Users\cody\AppData\Roaming\npm\node_modules.learnyounode_npminst
//   all\learnyounode\3.5.5\learnyounode\node_apidoc\http.html 来获取关于 http
//   模块的文档。

//   http.get() 方法是用来发起简单的 GET
//   请求的快捷方式，使用这个方法可以一定程度简化你的程序。http.get()
//   的第一个参数是你想要 GET 的 URL，第二个参数则是回调函数。

//   与其他的回调函数不同，这个回调函数有如下这些特征：

//      function callback (response) { /* ... */ }

//   response 对象是一个 Node 的 Stream 类型的对象，你可以将 Node Stream
//   当做一个会触发一些事件的对象，其中我们通常所需要关心的事件有三个：
//   "data"，"error" 以及 "end"。你可以像这样来监听一个事件：

//      response.on("data", function (data) { /* ... */ })

//   'data'
//   事件会在每个数据块到达并已经可以对其进行一些处理的时候被触发。数据块的大小
//   将取决于数据源。

//   你从 http.get() 所获得的 response 对象/Stream 还有一个 setEncoding()
//   的方法。如果你调用这个方法，并为其指定参数为 utf8，那么 data
//   事件中会传递字符串，而不是标准的 Node Buffer 对象，这样，你也不用再手动将
//   Buffer 对象转换成字符串了。


var http = require('http');

var url = process.argv[2];

http.get(url, function(res) {
    res.setEncoding('utf-8');
    res.on('data', function(data) {
        console.log(data);
    });
    res.on('error', function(error) {
        console.error(error);
    });
}).on('error', function(error) {
    console.log(error);
});

// var http = require('http')

//     http.get(process.argv[2], function (response) {
//       response.setEncoding('utf8')
//       response.on('data', console.log)
//       response.on('error', console.error)
//     }).on('error', console.error)
