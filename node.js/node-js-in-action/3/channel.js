var EventEmitter = require('events').EventEmitter;
var channel = new EventEmitter();

channel.on('join', function() {
    // 触发
    console.log('welcome!');
});

channel.emit('join');
