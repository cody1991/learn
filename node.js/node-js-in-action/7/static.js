var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic('public'));

app.listen('3000');
