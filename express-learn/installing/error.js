var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser());
app.use(methodOverride());

app.get('/', function(req, res, next) {
    res.send('Home');
});

// 义错误处理中间件和定义其他中间件一样，除了需要 4 个参数，而不是 3 个，其格式如下 (err, req, res, next)。例如：
// 在其他 app.use() 和路由调用后，最后定义错误处理中间件，比如：

// 中间件返回的响应是随意的，可以响应一个 HTML 错误页面、一句简单的话、一个 JSON 字符串，或者其他任何您想要的东西。

// 为了便于组织（更高级的框架），您可能会像定义常规中间件一样，定义多个错误处理中间件。比如您想为使用 XHR 的请求定义一个，还想为没有使用的定义一个，那么：
// app.use(function(err, req, res, next) {
//     res.send(err);
// });

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

function logErrors(err, req, res, next) {
    console.log(err.stack);
    next(err);
}

function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({
            error: 'Something blew up!'
        });
    } else {
        next(err);
    }
}

function errorHandler(err, req, res, next) {
    res.status(500);
    // res.render('error', {
    //     error: err
    // })
    res.send(error);
}

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});


// Express 内部使用 debug 模块记录路由匹配、使用到的中间件、应用模式以及请求-响应循环。

// debug 有点像改装过的 console.log，不同的是，您不需要在生产代码中注释掉 debug。它会默认关闭，而且使用一个名为 DEBUG 的环境变量还可以打开。
// 在启动应用时，设置 DEBUG 环境变量为 express:*，可以查看 Express 中用到的所有内部日志。

// $ DEBUG=express:* node index.js
// 在 Windows 系统里，使用如下的命令。

// > set DEBUG=express:* & node index.js

// 设置 DEBUG 的值为 express:router，只查看路由部分的日志；设置 DEBUG 的值为 express:application，只查看应用部分的日志，依此类推。
