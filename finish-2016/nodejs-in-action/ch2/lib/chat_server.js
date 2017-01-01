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
        guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed);

        joinRoom(socket, 'Lobby');

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

function assignGuestName(socket, guestNumber, nickNames, namesUsed) {
    var name = 'Guest ' + guestNumber

    nickNames[socket.id] = name;

    // console.log(nickNames);

    // 让用户知道他们的昵称
    socket.emit('nameResult', {
        success: true,
        name: name
    });
    namesUsed.push(name);
    return guestNumber + 1;
}

function joinRoom(socket, room) {
    socket.join(room);

    currentRoom[socket.id] = room;

    // console.log(currentRoom);

    // 让用户知道他们进入了新房间
    socket.emit('joinResult', {
        room: room
    });

    // 让房间其他用户知道有新用户进入了房间
    socket.broadcast.to(room).emit('message', {
        text: nickNames[socket.id] + ' has joined ' + room + '.'
    });

    // console.log(nickNames[socket.id] + ' has joined ' + room + '.');

    // var usersInRoom = io.sockets.adapter.rooms;

    // console.log(usersInRoom);

    // if (usersInRoom.length > 1) {
    //     var usersInRoomSummary = 'Users currently in ' + room + ': ';
    //     for (var index in usersInRoom) {
    //         var userSocketId = usersInRoom[index].id;
    //         if (userSocketId != socket.id) {
    //             if (index > 0) {
    //                 usersInRoomSummary += ', ';
    //             }
    //         }
    //         usersInRoomSummary += nickNames[userSocketId];
    //     }
    //     usersInRoomSummary += '.';
    //     socket.emit('message', {
    //         text: usersInRoomSummary
    //     });

    //     console.log(usersInRoomSummary);
    // }

    // console.log(usersInRoom);
}