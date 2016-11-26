var connect = require('connect'),
    compression = require('compression'),
    serveStatic = require('serve-static');

var app = connect()
    .use(compression())
    .use(serveStatic('public'))
    .listen(3000);

// curl http://localhost:3000/1.js -i
