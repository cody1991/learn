var express = require('express');
var app = express();

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

app.use(function(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

app.use('/user/:id', function(req, res, next) {
    console.log('Request Type', req.method);
    next();
});

app.get('/user/:id', function(req, res, next) {
    res.send('USER');
});


var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
