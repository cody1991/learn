var connect = require('connect'),
    vhost = require('vhost');

var server = connect();

var app = connect();


server.use(vhost('expressjs.com', app));


server.listen(3000);
