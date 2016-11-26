var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    mime = require('mime'),
    cache = {

    },
    chatServer = require('./lib/chat_server.js');

function send404(res) {
    // 状态码是 404
    res.writeHead(404, {
        'Content-Type': 'text/plain'
    });
    res.write('Error 404 : resource not found');
    // 最后都需要一个end()
    res.end();
}

function sendFile(res, filePath, fileContents) {
    // 状态码是 200
    res.writeHead(200, {
        // 使用path.basename找出路径里面的文件名字
        // 使用mime.look查找文件的类型
        'Content-Type': mime.lookup(path.basename(filePath))
    });
    // 发送文件
    res.end(fileContents);
}

function serverStatic(res, cache, absPath) {
    // console.log('读取 --- ' + absPath);
    // if (cache[absPath]) {
    //     // 在缓冲中，从内存中返回文件
    //     sendFile(res, absPath, cache[absPath]);
    // } else {
    // 一开始还在测试的时候先把缓存搞走，不然更新了文件也没用
    fs.exists(absPath, function(exists) {
            // 先使用fs.exists查看文件存不存在
            if (exists) {
                // 存在的话 读取文件的内容到 data
                fs.readFile(absPath, function(err, data) {
                    if (err) {
                        send404(res);
                    } else {
                        // 缓存起来
                        cache[absPath] = data;
                        // 发送读取的信息
                        sendFile(res, absPath, data);
                    }
                });
            } else {
                send404(res);
            }
        })
        // }
}

var server = http.createServer(function(req, res) {
    var filePath = false;

    if (req.url == '/') {
        filePath = 'public/index.html';
    } else {
        filePath = 'public' + req.url;
    }

    var absPath = './' + filePath;
    serverStatic(res, cache, absPath);
});

chatServer.listen(server);

server.listen(3000);
