// var http = require('http');

// var server = http.createServer(function(req, res) {
//     // 响应
//     // 状态码 还有类型
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });

//     res.end('Hello World!');
// });

// server.listen(3000, function() {
//     console.log('Server running at http://localhost:3000/');
// });

var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World');
});
server.listen(3000, function() {
    console.log('Server running at http://localhost:3000/');
});
