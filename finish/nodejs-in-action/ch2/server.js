var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    mime = require('mime'),
    cache = {};

// 处理Socket.IO相关的服务端聊天功能
var chatServer = require('./lib/chat_server');

// 不存在发送404
function send404(response) {
    response.writeHead(404, {
        'Content-Type': 'text/plain'
    });
    response.write('Error 404: resource not found.');
    response.end();
}

// 提供文件数据服务
function sendFile(response, filePath, fileContents) {

    // console.log(mime.lookup(path.basename(filePath)));

    response.writeHead(200, {
        "Content-Type": mime.lookup(path.basename(filePath))
    });
    response.end(fileContents);
}

// 缓存文件

function serverStatic(response, cache, absPath) {
    if (cache[absPath]) {
        //  检测是否在内存
        sendFile(response, absPath, cache[absPath]);
    } else {
        fs.exists(absPath, function(exists) {
            // 检测文件是否存在
            if (exists) {
                fs.readFile(absPath, function(err, data) {
                    if (err) {
                        send404(response);
                    } else {
                        cache[absPath] = data;
                        sendFile(response, absPath, data);
                    }
                })
            } else {
                send404(response);
            }
        });
    }

    var count = 0;
    for (var p in cache) {
        if (cache.hasOwnProperty(p)) {
            count++
        };
    }
    // console.log(count);
}

var server = http.createServer(function(request, response) {
    var filePath = false;

    if (request.url == '/') {
        filePath = 'public/index.html';
    } else {
        filePath = 'public' + request.url;
    }

    var absPath = './' + filePath;

    serverStatic(response, cache, absPath);
});

server.listen(3000, function() {
    console.log('Server listening on port 3000.');
});

// 启动Sockut.IO服务器，给它提供一个已经定义好的HTTP服务器，可以和HTTP服务器共享一个TCP/IP端口
chatServer.listen(server);