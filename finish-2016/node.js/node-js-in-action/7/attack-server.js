var connect = require('connect'),
    bodyParser = require('body-parser');

var app = connect()
    .use(type('application/x-www-form-urlencoded', bodyParser.json({
        limit: '64kb'
    })))
    .use(type('application/json', bodyParser.json({
        limit: '32kb'
    })))
    .use(type('image', bodyParser.json({
        limit: '2mb'
    })))
    .use(type('video', bodyParser.json({
        limit: '300mb'
    })))
    .use(bodyParser.json());

function type(type, fn) {
    return function(req, res, next) {
        // 看看是不是这种类型，是的话会有限制大小。
        var ct = req.headers['content-type'] || '';
        if (0 != ct.indexOf(type)) {
            return next();
        }
        fn(req, res, next);
    }
}

app.listen(3000);
