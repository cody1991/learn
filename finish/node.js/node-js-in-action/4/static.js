var http = require('http'),
    parse = require('url').parse,
    join = require('path').join,
    fs = require('fs');

var root = __dirname;

var server = http.createServer(function(req, res) {
    var url = parse(req.url);
    var path = join(root, url.pathname);

    // var stream = fs.createReadStream(path);

    // stream.on('data', function(chunk) {
    //     res.write(chunk);
    // });

    // stream.on('end', function() {
    //     res.end();
    // });

    // =======>

    // stream.pipe(res);

    // stream.on('error', function(err) {
    //     res.statusCode = 500;
    //     res.end('Internal server Error');
    // });


    // 使用fs.stat 获取文件的信息，比如它的大小，或者错误吗
    // 文件不存在的时候，会在err.code中放入ENOENT作为响应，然后可以返回错误吗404，向客户端表明文件未找到
    // 如果返回了其他错误吗，可以返回通用错误吗500

    fs.stat(path, function(err, stat) {
        if (err) {
            if ('ENOENT' == err.code) {
                res.statusCode = 404;
                res.end('Not Found');
            } else {
                res.statusCode = 500;
                res.end('Internal Server Error');
            }
        } else {
            res.setHeader('Content-Length', stat.size);
            var stream = fs.createReadStream(path);
            stream.pipe(res);

            stream.on('error', function(err) {
                res.statusCode = 500;
                res.end('Internal Server Error');
            });
        }
    });

    // console.log(url, path);
});

server.listen(3000);

// curl http://localhost:3000/index.html -i

// -i == --include cURL把响应头显示出来
