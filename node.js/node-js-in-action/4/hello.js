var http = require('http');

var server = http.createServer(function(req, res) {
    // 把响应的数据写到socket
    // res.write('Hello World');
    // res.end();

    // res.setHeader(field, value);
    // res.getHeader(field);
    // res.removeHeader(field);

    // var body = 'Hello World';

    // res.setHeader('Content-Length', body.length);
    // res.setHeader('Content-Type', 'text/plain');

    var url = 'http://www.baidu.com';
    var body = '<p>Redirecting to<a href="' + url + '">' + url + '</a></p>';

    res.setHeader('Location', url);
    res.setHeader('Content-Length', body.length);
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 302;

    res.end(body);
});

server.listen(3000);
