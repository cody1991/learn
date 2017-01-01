var socketio = require('socket.io');

// 指向现在的那个人。
var io;
var guestNumber = 1;
var nickNames = {};
var namesUsed = [];
var currentRoom = {};

exports.listen = listen;

function listen(server) {
    // 启动了socket.io服务器，允许搭载已有的HTTP服务
    io = socketio.listen(server);

    io.sockets.on('connection', function(socket) {
        console.log('连接成功！');
        // 赋予名字
        guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed);

        // 刚进来的时候放在 Lobby 房间
        joinRoom(socket, 'Lobby');

        // 处理用户的消息，更名，以及聊天室的创建和变更
        handleMessageBroadcasting(socket, nickNames);

        handleNameChangeAttempts(socket, nickNames, namesUsed);

        handleRoomJoining(socket);

        socket.on('rooms', function() {
            // 用户发出请求的时候，向其提供已经被占用的聊天室列表
            // console.log(io.sockets.adapter.rooms)

            var socketsRooms = io.sockets.adapter.rooms;
            console.log(socketsRooms);

            socket.emit('rooms', socketsRooms);
        });

        // 用户断开以后清除逻辑
        handleClitentDisconnection(socket, nickNames, namesUsed);
    });

    function assignGuestName(socket, guestNumber, nickNames, namesUsed) {
        var name = 'Guest ' + guestNumber;

        // 把用户的名称和客户端连接ID关联上
        nickNames[socket.id] = name;

        // 触发一个事件，让别人知道它们的昵称。
        socket.emit('nameResult', {
            success: true,
            name: name
        });

        namesUsed.push(name);

        // console.log(namesUsed);

        return guestNumber + 1;
    }

    function joinRoom(socket, room) {
        // 把用户加入房间很简单，使用 socket 上面的 join 方法。

        // 让用户加入这个房间
        socket.join(room);
        // 记录当前用户的房间
        currentRoom[socket.id] = room;

        socket.emit('joinResult', {
            room: room
        });

        // 让房间的其他用户知道有新用户进来了
        socket.broadcast.to(room).emit('message', {
            text: nickNames[socket.id] + ' has joined ' + room + '.'
        });

        // 确定有哪些人在这个房间里面
        var usersInRoom = io.sockets.adapter.rooms[room];

        // console.log(io.sockets.adapter.rooms[room]);

        // 如果不止一个用户，汇总下是谁
        if (usersInRoom.length > 1) {
            var usersInRoomSummary = 'Users currently in ' + room + ': ';

            var index = 0;

            for (var userSocketId in usersInRoom.sockets) {

                if (userSocketId != socket.id) {
                    if (index > 0) {
                        usersInRoomSummary += ', ';
                    }
                    usersInRoomSummary += nickNames[userSocketId];
                    index++;
                }
            }
            usersInRoomSummary += '.';

            // 把房间里面的其他人汇总出来
            socket.emit('message', {
                text: usersInRoomSummary
            });
        }
    }

    function handleNameChangeAttempts(socket, nickNames, namesUsed) {
        // 监听这个事件
        socket.on('nameAttempt', function(name) {
            if (name.indexOf('Guest') == 0) {
                socket.emit('nameResult', {
                    success: false,
                    message: 'Names cannot has "Guest".'
                });
            } else {
                if (namesUsed.indexOf(name) == -1) {
                    var previousName = nickNames[socket.id];
                    var previousNameIdx = namesUsed.indexOf(previousName);

                    namesUsed.splice(previousNameIdx, 1);
                    namesUsed.push(name);
                    nickNames[socket.id] = name;

                    socket.emit('nameResult', {
                        success: true,
                        name: name
                    });

                    socket.broadcast.to(currentRoom[socket.id]).emit('message', {
                        text: previousName + ' is now knows as ' + name + '.'
                    });

                } else {
                    socket.emit('nameResult', {
                        success: false,
                        message: 'That name is alreay in use'
                    });
                }
            }
        })
    }

    function handleMessageBroadcasting(socket) {
        // 客户端触发message
        socket.on('message', function(message) {
            socket.broadcast.to(message.room).emit('message', {
                text: nickNames[socket.id] + ': ' + message.text
            });
        });
    }

    function handleRoomJoining(socket) {
        socket.on('join', function(room) {
            // 离开房间
            socket.leave(currentRoom[socket.id]);
            joinRoom(socket, room.newRoom);
        });
    }

    function handleClitentDisconnection(socket) {
        socket.on('disconnect', function() {
            var nameIndex = namesUsed.indexOf(nickNames[socket.id]);
            namesUsed.splice(nameIndex, 1);
            delete nickNames[socket.id];
        })
    }
}
