var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'image/png'
    });

    // 数据从文件读进来 然后数据随着进来就被送到(pipe)客户端(res)，数据流动的时候，事件轮询还能处理其他事情
    fs.createReadStream('./1.png').pipe(res);
});

server.listen(3000);
