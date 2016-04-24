var http = require('http'),
    zlib = require('zlib');

http.createServer(function(request, response) {
    var i = 1024,
        data = '';

    while (i--) {
        data += '.';
    }

    console.log(data);

    if ((request.headers['accept-encoding'] || '').indexOf('gzip') !== -1) {
        zlib.gzip(data, function(err, data) {
            response.writeHead(200, {
                'Content-Type': 'text/plain',
                'Content-Encoding': 'gzip'
            });

            response.end(data);
        });
    } else {
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        response.end(data);
    }
}).listen(8080);
