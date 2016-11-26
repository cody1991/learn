var net = require('net');

var server = net.createServer(function(socket) {
    var now = new Date();

    var year = now.getFullYear(),
        month = now.getMonth(),
        date = now.getDate(),
        hour = now.getHours(),
        min = now.getMinutes();

    var timeString = '';

    timeString += year + '-' + format(month + 1) + '-' + format(date) + ' ' + format(hour) + ':' + format(min);

    // socket.write(timeString);
    // socket.end();
    socket.end(timeString + '\n');

    function format(num) {
        num = parseInt(num, 10);
        if (num < 10) {
            num = '0' + num;
        }
        return num;
    }

});

server.listen(process.argv[2]);


// 这次练习中，我们将会创建一个 TCP 服务器。这里将不会涉及到任何 HTTP
//   的事情，因此我们只需使用 net 这个 Node
//   核心模块就可以了。它包含了所有的基础网络功能。

//   net 模块拥有一个名叫 net.createServer() 的方法，它会接收一个回调函数。和
//   Node 中其他的回调函数不同，createServer()
//   所用的回调函数将会被调用多次。你的服务器每收到一个 TCP
//   连接，都会调用一次这个回调函数。这个回调函数有如下特征：

//      function callback (socket) { /* ... */ }

//   net.createServer() 也会返回一个 TCP 服务器的实例，你必须调用
//   server.listen(portNumber) 来让你的服务器开始监听一个特定的端口。

//   一个典型的 Node TCP 服务器将会如下所示：

//      var net = require('net')
//      var server = net.createServer(function (socket) {
//        // socket 处理逻辑
//      })
//      server.listen(8000)

//   记住，请一定监听由第一个命令行参数指定的端口。

//   socket 对象包含了很多关于各个连接的信息（meta-data），但是它也同时是一个
//   Node 双工流（duplex
//   Stream），所以，它即可以读，也可以写。对这个练习来说，我们只需要对 socket
//   写数据和关闭它就可以了。

//   使用  socket.write(data) 可以写数据到 socket 中，用  socket.end()
//   可以关闭一个 socket。另外， .end()
//   方法也可以接收一个数据对象作为参数，因此，你可简单地使用 socket.end(data)
//   来完成写数据和关闭两个操作。

//   net 模块的文档可以通过浏览器访问如下连接来查看：

//   file://C:\Users\cody\AppData\Roaming\npm\node_modules.learnyounode_npminst
//   all\learnyounode\3.5.5\learnyounode\node_apidoc\net.html

//   要创建一个日期，你需要使用 new Date()
//   并且自定义一个格式，这些方法将会很有用：

//      date.getFullYear()
//      date.getMonth()     // 从 0 开始
//      date.getDate()      // 返回当前月的日期
//      date.getHours()
//      date.getMinutes()

//   或者，如果你喜欢尝鲜的话，可以使用  strftime 这个模块。其中 strftime(fmt,
//   date) 这个方法可以接收一个和 unix 命令 date
//   相似的时间日期格式。你可以在这里查看更多关于 strftime
//   的信息：[https://github.com/samsonjs/strftime](https://github.com/samsonjs
//   /strftime)
