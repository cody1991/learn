var connect = require('connect'),
    serveIndex = require('serve-index'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveIndex('public'))
    .use(serveStatic('public'))
    .listen(3000);
