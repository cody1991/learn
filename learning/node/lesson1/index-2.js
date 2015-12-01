var http = require('http');
var querystring = require('querystring');

http.createServer(function(req, res) {
    var postData = '';
    req.setEncoding('utf-8');

    req.on('data', function(trunk) {
        postData += trunk;
    });

    req.on('end', function() {
        res.end(postData);
    });

    console.log(postData);
}).listen(8002);

console.log('服务器启动完成 port : 8002');
