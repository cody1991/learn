var connect = require('connect'),
    logger = require('./logger.js'),
    router = require('./router.js');

var app = connect();



// app.use(router(require('./routes/user')))
//     .use(router(require('./routes/admin')));

var routes = {
    GET: {
        '/users': function(req, res) {
            res.end('tobi,loki,ferret');
        },
        '/users/:id': function(req, res, id) {
            res.end('user ' + id);
        }
    },
    DETELE: {
        '/user/:id': function(req, res, id) {
            res.end('deleted user ' + id);
        }
    }
}

app.use(logger(':method :url'));
app.use(router(routes));
app.listen(3000);