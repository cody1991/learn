var connect = require('connect');

var db = {
    users: [{
        name: 'tobi'
    }, {
        name: 'loki'
    }, {
        name: 'jane'
    }]
}

var api = connect()
    .use(users)
    .use(pets)
    .use(errorHandler);

var app = connect()
    .use(hello)
    .use('/api', api)
    .use(errorPage)
    .listen(3000);

function errorPage(err, req, res, next) {

}

function errorHandler(err, req, res, next) {
    console.log(err.stack);

    res.setHeader('Content-Type', 'application/json');
    if (err.notFound) {
        res.statusCode = 404;
        res.end(JSON.stringify({
            error: err.message
        }));
    } else {
        res.statusCode = 500;
        res.end(JSON.stringify({
            error: 'Internal Server Error'
        }));
    }
}

function pets(req, res, next) {
    if (req.url.match(/^\/pets\/(.+)/)) {
        foo();
    } else {
        next();
    }
}

function users(req, res, next) {
    // console.log(req.url);
    var match = req.url.match(/^\/user\/(.+)/);
    if (match) {
        var user;
        for (var i = 0; i < db.users.length; i++) {
            if (match[1] == db.users[i]['name']) {
                user = db.users[i];
            }
        }
        if (user) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(user));
        } else {
            var err = new Error('User not found');
            err.notFound = true;
            next(err);
        }
    } else {
        next();
    }
}

function hello(req, res, next) {
    if (req.url.match(/^\/hello/)) {
        res.end('Hello world');
    } else {
        next();
    }
}