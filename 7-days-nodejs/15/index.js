var fs = require('fs'),
    path = require('path'),
    http = require('http');

// http://assets.example.com/foo/??bar.js,baz.js

var MIME = {
    '.css': 'text/css',
    '.js': 'application/javascript'
};

function combineFiles(pathnames, callback) {

    // console.log(pathnames);
    var output = [];

    (function next(i, len) {
        if (i < len) {
            fs.readFile(pathnames[i], function(err, data) {
                if (err) {
                    callback(err);
                } else {
                    output.push(data);
                    // console.log(output);
                    next(i + 1, len);
                }
            })
        } else {
            callback(null, Buffer.concat(output));
        }
    }(0, pathnames.length));
}

function main(argv) {
    var config = JSON.parse(fs.readFileSync(argv[0], 'utf-8')),
        root = config.root || '.',
        port = config.port || 8080;

    http.createServer(function(request, response) {
        var urlInfo = parseURL(root, request.url);

        combineFiles(urlInfo.pathnames, function(err, data) {

            console.log(data);

            if (err) {
                response.writeHead(404);
                response.end(err.message);
            } else {
                response.writeHead(200, {
                    'Content-Type': urlInfo.mime
                });
                response.end(data);
            }
        });
    }).listen(port);
}

function parseURL(root, url) {
    var base, pathnames, parts;

    // console.log('原始' + url);
    if (url.indexOf('??') === -1) {
        url = url.replace('/', '/??');

        // console.log(url);
    }

    parts = url.split('??');
    base = parts[0];

    // console.log(parts);

    pathnames = parts[1].split(',').map(function(value) {
        // console.log(path.join(root, base, value));
        return path.join(root, base, value);
    });

    return {
        mime: MIME[path.extname(pathnames[0])] || 'text/plain',
        pathnames: pathnames
    }
}


main(process.argv.slice(2));
