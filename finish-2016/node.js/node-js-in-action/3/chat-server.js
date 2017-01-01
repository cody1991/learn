var events = require('events'),
    net = require('net');

var channel = new events.EventEmitter();

channel.clients = {};
channel.subscriptions = {};

// channel.setMaxListeners(50);
// 最多监听50个

channel.on('join', function(id, client) {
    console.log(id + ' connect!');
    this.clients[id] = client;
    this.subscriptions[id] = function(senderId, message) {
        if (id != senderId) {
            console.log(id, senderId);
            this.clients[id].write(message);
        }
    }
    this.on('broadcast', this.subscriptions[id]);
    var welcome = 'Welcome!\n' + 'Guests online: ' + this.listeners('broadcast').length;

    client.write(welcome + '\n');

});

channel.on('leave', function(id) {
    channel.removeListener('broadcast', this.subscriptions[id]);
    channel.emit('broadcast', id, id + ' has left the chat.');
});

channel.on('shutdown', function() {
    channel.emit('broadcast', '', ' chat has shut down.\n');
    channel.removeAllListeners('broadcast');
});

var server = net.createServer(function(client) {
    var id = client.remoteAddress + ':' + client.remotePort;

    console.log(id);

    channel.emit('join', id, client);

    client.on('data', function(data) {
        data = data.toString();
        // console.log(data);

        if (data == 'shutdown\r\n') {
            channel.emit('shutdown');
        }

        channel.emit('broadcast', id, data);
    });

    client.on('close', function() {
        channel.emit('leave', id);
    });
});

server.listen(8888);
