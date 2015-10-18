var http = require('http'),
    fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) responseCode = 200;

    fs.readFile(__dirname + path, function(err.data) {
        if (err) {
            res.writeHead(500, {
                'Content-type': 'text/plain'
            });
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode, {
                'Content-type': 'text/plain'
            });
            res.end(data);
        }
    })
}


http.createServer(function(req, res) {

    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            res.end('homepage');
            break;
        case '/about':
            res.end('about');
            break;
        default:
            res.writeHead(404, {
                'Content-type': 'text/plain'
            });
            res.end('Not found');
            break;
    }

}).listen(3000);

console.log('Server running on localhost:3000');
