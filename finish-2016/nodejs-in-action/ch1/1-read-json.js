var fs = require('fs');

fs.readFile('./resource.json', function(err, data) {
    // console.log(err, data);
});

var http = require('http');

// http.createServer(function(req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });

//     res.end('Hello Wolrd\n');
// }).listen(3000);

// console.log('Server running at http://localhost:3000/');

var server = http.createServer();

server.on('request', function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'image/jpg'
    });
    var imageStream = fs.createReadStream('./bg1.jpg');
    imageStream.pipe(res);

    // 管道读入流到写出流的管道 

    imageStream.on('data', function(chunk) {
        // 当有新的数据块准备好会激发data事件
        console.log(chunk);
    });

    imageStream.on('end', function() {
        console.log('image finished');
    });

});

server.listen(3000);

console.log('Server running at http://localhost:3000/');


var stream = fs.createReadStream('./resource.json');

stream.on('data', function(chunk) {
    // 当有新的数据块准备好会激发data事件
    console.log('data:' + chunk);
});

stream.on('end', function() {
    console.log('finished');
});