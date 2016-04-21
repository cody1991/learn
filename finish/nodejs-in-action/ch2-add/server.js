var express = require('express'),
    io = require('socket.io');

var app = express();

app.use(express.static(__dirname));

var server = app.listen(8888);

var ws = io.listen(server);