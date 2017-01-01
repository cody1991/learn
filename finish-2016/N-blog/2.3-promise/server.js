var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');

http.createServer(function(req, res) {
    var pathname = __dirname + url.parse(req.url).pathname;

    if (path.extname(pathname) == '') {
        pathname += '/';
    }
    if (pathname.charAt(pathname.length - 1) == '/') {
        pathname += 'ajax.html'
    }

    fs.exists(pathname, function(exists) {
        if (exists) {
            switch (path.extname(pathname)) {
                case '.html':
                    res.writeHead(200, {
                        'Content-Type': 'text/html',
                        'Access-Control-Allow-Origin': '*'
                    });
                    break;
            }
        }
        fs.readFile(pathname, function(err, data) {
            res.end(data);
        });
    })

}).listen(3000);
