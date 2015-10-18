var http = require('http'),
    fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) responseCode = 200;

    fs.readFile(__dirname + path, function(err, data) {
        if (err) {
            res.writeHead(500, {
                'Content-type': 'text/plain'
            });
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode, {
                'Content-type': contentType
            });
            res.end(data);
        }
    })
}


http.createServer(function(req, res) {

    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            serveStaticFile(res, '/public/home.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/img/demo.png':
            serveStaticFile(res, '/public/img/demo.png', 'images/png');
        default:
            serveStaticFile(res, '/public/notfound.html', 'text/html', 404);
            break;
    }

}).listen(3000);

console.log('Server running on localhost:3000');
