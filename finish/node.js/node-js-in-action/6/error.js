var connect = require('connect');

connect()
    .use(function hello(req, res) {
        foo();
        res.setHeader('Content-Type', 'text/plain');
        res.end('hello world');
    })
    .use(errorHandle())
    .listen(3000);

function errorHandle() {
    var env = process.env.NODE_ENV || 'development';
    console.log(env);
    return function(err, req, res, next) {
        res.statusCode = 500;
        console.log(err);
        switch (env) {
            case 'development':
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(err));
            default:
                res.end('Server error');
        }
    }
}