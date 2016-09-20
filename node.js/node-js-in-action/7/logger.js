var connect = require('connect'),
    logger = require('morgan'),
    path = require('path'),
    fs = require('fs'),
    favicon = require('serve-favicon');

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'logger.log'), {
    flags: 'a'
});

var app = connect()
    .use(favicon(__dirname + '/favicon.ico'))
    .use(logger('dev', {
        stream: accessLogStream
    }))
    .use(hello)
    .listen(3000);

function hello(req, res) {
    res.end('Hello World');
}
