var http = require('http'),
    // fs = require('fs'),
    through2 = require('through2');

// var tr = through2(function(buff, _, next) {
//     this.push(buff.toString().toUpperCase());
//     next();
// });

var server = http.createServer(function(req, res) {
    // fs.createReadStream('file.txt').pipe(res);
    if (req.method === 'POST') {
        // req.pipe(fs.createReadStream('post.txt'));

        req.pipe(through2(function(buf, _, next) {
            this.push(buf.toString().toUpperCase());
            next();
        })).pipe(res);

    } else {

        res.end('send me a POST');
    }
});

server.listen(process.argv[2]);
