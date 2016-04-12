var socketio = require('socket.io');


var io,
    guestNumber = 1,
    nickNames = {},
    namesUsed = [],
    currentRoom = {};


// 启动socketIO服务器，限定socketIO向控制台输出的日志的详细情况，确定如何处理每个接进来的连接
exports.listen = function(server) {
    io = socketio.listen(server);

    // 发现无效
    // io.set('log level', 1);

    // 每个连接的处理逻辑
    io.sockets.on('connection', function(socket) {
        // guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed);

        // joinRoom(socket, 'Lobby');

        // // 处理用户消息，更名，以及聊天室的创建和变更
        // handleMessageBroadcasting(socket, nickNames);
        // handleNameChangeAttempts(socket, nickNames, namesUsed);
        // handleRoomJoining(socket);

        // // 用户发出请求时，向其提供已经被占用的聊天室的列表
        // socket.on('rooms', function() {
        //     socket.emit('rooms', io.sockets.manager.rooms)
        // });

        // // 用户离开时清除逻辑
        // handleClientDisconnection(socket, nickNames, namesUsed);
    });

}