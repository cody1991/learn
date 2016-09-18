var net = require('net');

var server = net.createServer(function(socket) {
    socket.on('data', function(data) {
        console.log(1);
        socket.write(data);
    });
});

server.listen(8888);


// once
