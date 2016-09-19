var connect = require('connect');

var app = connect();

function logger(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
}

function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world');
}

// 三个可以链接起来
// app.use(logger);
// app.use(hello);
// app.listen(3000);


// 挂载
// 可以给中间件或者整个程序定义一个路径前缀
// 你可以像在根层次下编写中间件 (/ 根 req.url) 并且不修改代码就可以把它用在任意路径前缀上
// 比如说一个中间件组建货服务器挂载到了/blog上，代码中/article/1点req.url通过客户端访问就是/blog/article/1 这种分离意味你可以在多个地方充用博客服务器，不用为不同的访问源修改代码

app.use(logger)
    // .use('/admin', restrict)
    .use('/admin', admin)
    .use(hello)
    .listen(3000);

function restrict(req, res, next) {
    var authorization = req.headers.authorization;

    if (!authorization) {
        return next(new Error('Unauthorized'));
    }

    var parts = authorization.split(' ');
    var scheme = parts[0];
    var auth = new Buffer(parts[1], 'base64').toString().splite(':');
    var user = auth[0];
    var pass = auth[1];

    // 在数据库里面查找
    authenticateWithDatabase(user, pass, function(err) {
        if (err) {
            return next(err);
        }

        // 如果认证信息有效，不带参数的next();
        next();
    });
}

function admin(req, res, next) {
    switch (req.url) {
        case '/':
            res.end('try /users');
            break;
        case '/users':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(['tobi', 'loki', 'jane']));
            break;
    }
    next();
}


// 可复用的中间件

function setup(options) {
    return function(req, res, next) {
        // 中间件逻辑
    }
}

// app.use(setup({some:'options'}))