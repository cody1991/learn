var express = require('express');
var logger = require('morgan');
var path = require('path');
var http = require('http');

var app = express();

// What’s all that business about path.resolve? Why can’t you just say /public? The
// short answer is that you could, but it’s not cross-platform.
// On Mac and Linux, you want this directory:
// /public
// But on Windows, you want this directory:
// \public
// Node’s built-in path module will make sure that things run smoothly on Windows,
// Mac, and Linux.
var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.use(logger('short'));

app.use(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    response.end('Hello,world');
});

http.createServer(app).listen(3000);
