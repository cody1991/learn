var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var router = express.Router();

console.log(cookieParser);

app.use(cookieParser());

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function(res, path, stat) {
        res.set('x-timestamp', Date.now());
    }
}

app.use(express.static('public', options));

// 每个应用可有多个静态目录。

// app.use(express.static('public'));
// app.use(express.static('uploads'));
// app.use(express.static('files'));

// Express 是一个自身功能极简，完全是由路由和中间件构成一个的 web 开发框架：从本质上来说，一个 Express 应用就是在调用各种中间件。

// 中间件（Middleware） 是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。

// 中间件的功能包括：

// 执行任何代码。
// 修改请求和响应对象。
// 终结请求-响应循环。
// 调用堆栈中的下一个中间件。
// 如果当前中间件没有终结请求-响应循环，则必须调用 next() 方法将控制权交给下一个中间件，否则请求就会挂起。

// 应用级中间件
// 应用级中间件绑定到 app 对象 使用 app.use() 和 app.METHOD()， 其中， METHOD 是需要处理的 HTTP 请求的方法，例如 GET, PUT, POST 等等，全部小写。例如：

// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
// app.use(function(req, res, next) {
//     console.log('Time: ', Date.now());
//     next();
// });

router.use(function(req, res, next) {
    var now = new Date();
    console.log('Time: ', now.getFullYear(), '-', now.getMonth() + 1, '-', now.getDate());
    next();
});



// 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它
// app.use('/user/:id', function(req, res, next) {
//     console.log('Request Type', req.method);
//     next();
// });

// 下面这个例子展示了在一个挂载点装载一组中间件。
// app.use('/user/:id', function(req, res, next) {
//     console.log('Request URL:', req.originalUrl);
//     next();
// }, function(req, res, next) {
//     console.log('Request Type:', req.method);
//     next();
// });

router.use('/user/:id', function(req, res, next) {
    console.log('Request URL : ', req.originalUrl);
    next();
}, function(req, res, next) {
    console.log('Request Type : ', req.method);
    next();
});

// 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求

// 作为中间件系统的路由句柄，使得为路径定义多个路由成为可能。在下面的例子中，为指向 /user/:id 的 GET 请求定义了两个路由。第二个路由虽然不会带来任何问题，但却永远不会被调用，因为第一个路由已经终止了请求-响应循环。
// app.get('/user/:id', function(req, res, next) {
//     console.log('ID:', req.params.id);
//     next();
// }, function(req, res, next) {
//     res.send('User Info');
// })

// app.get('/user/:id', function(req, res, next) {
//     res.send(req.params.id);
// });

router.get('/user/:id', function(req, res, next) {
    if (req.params.id == 0) next('route');
    else next();
}, function(req, res, next) {
    // res.render('regular');
    res.send(req.params.id);
});

router.get('/user/:id', function(req, res, next) {
    res.send('next route ' + req.params.id);
    // res.render('special');
});

app.use('/', router);

// 错误处理中间件有 4 个参数，定义错误处理中间件时必须使用这 4 个参数。即使不需要 next 对象，也必须在签名中声明它，否则中间件会被识别为一个常规中间件，不能处理错误。

app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.status(500).send('something broke!');
})

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

// 从 4.x 版本开始，, Express 已经不再依赖 Connect 了。除了 express.static, Express 以前内置的中间件现在已经全部单独作为模块安装使用了。请参考 中间件列表。

// express.static(root, [options])

// express.static 是 Express 唯一内置的中间件。它基于 serve-static，负责在 Express 应用中提托管静态资源。

// 参数 root 指提供静态资源的根目录。

// 可选的 options 参数拥有如下属性。


// 属性  描述  类型  缺省值
// dotfiles    是否对外输出文件名以点（.）开头的文件。可选值为 “allow”、“deny” 和 “ignore”  String  “ignore”
// etag    是否启用 etag 生成    Boolean true
// extensions  设置文件扩展名备份选项 Array   []
// index   发送目录索引文件，设置为 false 禁用目录索引。  Mixed   “index.html”
// lastModified    设置 Last-Modified 头为文件在操作系统上的最后修改日期。可能值为 true 或 false。   Boolean true
// maxAge  以毫秒或者其字符串格式设置 Cache-Control 头的 max-age 属性。  Number  0
// redirect    当路径为目录时，重定向至 “/”。   Boolean true
// setHeaders  设置 HTTP 头以提供文件的函数。  Function
