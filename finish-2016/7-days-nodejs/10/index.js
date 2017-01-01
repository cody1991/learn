var http = require('http');

http.createServer(function(req, res) {
    var body = [];

    console.log(req.method);
    console.log(req.headers);

    res.on('data', function(chunk) {
        body.push(chunk);
    });

    res.writeHead(200, {
        'Content-Type': 'text-plain'
    });

    res.end('Hello World!\n');
}).listen(8124);
