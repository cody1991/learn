var express = require('express');

var app = express();

// 通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。

// 将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了。例如，假设在 public 目录放置了图片、CSS 和 JavaScript 文件，你就可以：

app.use(express.static('public'));

// 现在，public 目录下面的文件就可以访问了。

// http://localhost:3000/images/kitten.jpg
// http://localhost:3000/css/style.css
// http://localhost:3000/js/app.js
// http://localhost:3000/images/bg.png
// http://localhost:3000/hello.html

// 所有文件的路径都是相对于存放目录的，因此，存放静态文件的目录名不会出现在 URL 中。

// 如果你的静态资源存放在多个目录下面，你可以多次调用 express.static 中间件：

// app.use(express.static('public'));
// app.use(express.static('files'));

app.use(express.static('files'));

// 访问静态资源文件时，express.static 中间件会根据目录添加的顺序查找所需的文件。

// 如果你希望所有通过 express.static 访问的文件都存放在一个“虚拟（virtual）”目录（即目录根本不存在）下面，可以通过为静态资源目录指定一个挂载路径的方式来实现，如下所示：

// app.use('/static', express.static('public'));
// 现在，你就爱可以通过带有 “/static” 前缀的地址来访问 public 目录下面的文件了。

// http://localhost:3000/static/images/kitten.jpg
// http://localhost:3000/static/css/style.css
// http://localhost:3000/static/js/app.js
// http://localhost:3000/static/images/bg.png
// http://localhost:3000/static/hello.html

app.use('/static', express.static('public'));

app.get('/', function(req, res) {
    res.send('hello world');
});

app.post('/', function(req, res) {
    res.send('Got a POST request');
});

app.put('/user', function(req, res) {
    res.send('Got a PUT request at /user');
});

app.delete('/user', function(req, res) {
    res.send('Got a DELETE request at /user');
});

// 匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等
app.get(/.*fly$/, function(req, res) {
    res.send('/.*fly$/');
});

// app.use(function(req, res, next) {
//   res.status(404).send('Sorry cant find that!');
// });

var server = app.listen(3000, function() {
    // req (请求) 和 res (响应) 与 Node 提供的对象完全一致，因此，你可以调用 req.pipe()、req.on('data', callback) 以及任何 Node 提供的方法。
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

// 如何渲染纯 HTML 文件？
// 不需要！无需通过 res.render() 渲染 HTML。你可以通过 res.sendFile() 直接对外输出 HTML 文件。如果你需要对外提供的资源文件很多，可以使用 express.static() 中间件。

// 匹配abd abcd
// app.get('/ab?cd',function(req,res){
//     res.send('ab?cd');
// });

// 匹配abcd abbcd abbbcd
// app.get('/ab+cd', function(req, res) {
//     res.send('ab+cd');
// }

// abcd abxcd abRandomcd ab123cd
// app.get('/ab*cd', function(req, res) {
//     res.send('ab*cd');
// });

// 匹配abe abcde
// app.get('/ab(cd)?e', function(req, res) {
//     res.send('ab(cd)?e');
// });

// 含有a的
// app.get('/a/', function(req, res) {
//     res.send('/a/');
// });

// app.get(/.*fly$/, function(req, res) {
//     res.send('/.*fly$/');
// });


// ----------------------

// 可以为请求处理提供多个回调函数，其行为类似 中间件。唯一的区别是这些回调函数有可能调用 next('route') 方法而略过其他路由回调函数。可以利用该机制为路由定义前提条件，如果在现有路径上继续执行没有意义，则可将控制权交给剩下的路径。

// 路由句柄有多种形式，可以是一个函数、一个函数数组，或者是两者混合，如下所示.

// 使用一个回调函数处理路由：

// app.get('/example/a',function(req,res){
//     res.send('Hello from A!');
// });

// 使用多个回调函数处理路由（记得指定 next 对象）：

// app.get('/example/b', function(req, res, next) {
//     console.log('response will be sent by the next..');
//     next();
// }, function(req, res) {
//     res.send('Hello from B!');
// });

// 使用回调函数数组处理路由：

// var cb0 = function(req, res, next) {
//     console.log('CB0');
//     next();
// }

// var cb1 = function(req, res, next) {
//     console.log('CB1');
//     next();
// }

// var cb2 = function(req, res) {
//     res.send('Hello from c!');
// }

// app.get('/example/c', [cb0, cb1, cb2]);

// 混合使用函数和函数数组处理路由：

// var cb0 = function(req, res, next) {
//     console.log('CB0');
//     next();
// }

// var cb1 = function(req, res, next) {
//     console.log('CB1');
//     next();
// }

// app.get('/example/d', ['cb0', 'cb1'], function(req, res, next) {
//     console.log('response will be sent by the next function...');
// }, function(req, res) {
//     res.send('Hello from D!');
// });


// 下表中响应对象（res）的方法向客户端返回响应，终结请求响应的循环。如果在路由句柄中一个方法也不调用，来自客户端的请求会一直挂起。

// 方法  描述
// res.download()  提示下载文件。
// res.end()   终结响应处理流程。
// res.json()  发送一个 JSON 格式的响应。
// res.jsonp() 发送一个支持 JSONP 的 JSON 格式的响应。
// res.redirect()  重定向请求。
// res.render()    渲染视图模板。
// res.send()  发送各种类型的响应。
// res.sendFile    以八位字节流的形式发送文件。
// res.sendStatus()    设置响应状态代码，并将其以字符串形式作为响应体的一部分发送。

// 可使用 app.route() 创建路由路径的链式路由句柄。由于路径在一个地方指定，这样做有助于创建模块化的路由，而且减少了代码冗余和拼写错误。请参考 Router() 文档 了解更多有关路由的信息。

// 下面这个示例程序使用 app.route() 定义了链式路由句柄。

// app.route('/book')
//     .get(function(req, res) {
//         res.send('Get a random book');
//     })
//     .post(function(req, res)) {
//         res.send('Add a book');
//     }
//     .put(function(req, res) {
//         res.send('Update the book');
//     });
