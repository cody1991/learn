var http = require('http'),
    url = require('url'),
    items = [];

var server = http.createServer(function(req, res) {
    switch (req.method) {
        case 'GET':
            // items.forEach(function(item, i) {
            //     res.write('\n\n' + i + ') ' + item + '\n');
            // });
            // res.end();
            // 事先设定好 Content-Length;

            var body = items.map(function(item, i) {
                return i + ') ' + item;
            }).join('\n');

            // body.length 是字节长度，不是字符长度
            // 如果字符串有多字节字符，两者的长度就不一样
            // 使用Buffer.byteLength
            res.setHeader('Content-Length', Buffer.byteLength(body));
            res.setHeader('Content-Type', 'text/plain;charset="utf-8');
            res.end(body);
            break;
        case 'POST':
            var item = '';
            req.setEncoding('utf8');
            req.on('data', function(chunk) {
                item += chunk;
            });
            req.on('end', function() {
                items.push(item);
                res.end('\n\nPOST OK\n');
            });
            break;
        case 'DELETE':
            // curl -X DELETE  http://localhost:3000/0?api-key=foobar
            var path = url.parse(req.url).pathname;
            var i = parseInt(path.slice(1), 10);

            console.log(path, i);

            if (isNaN(i)) {
                res.statusCode = 400;
                res.end('Invalid item id');
            } else if (!items[i]) {
                res.statusCode = 400;
                res.end('Item not found');
            } else {
                items.splice(i, 1);
                res.end('\n\nDelete OK\n');
            }
            break;
    }
});

server.listen(3000);

// console.log(url.parse('http://localhost:3000/1?api-key=foobar'))

// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'localhost:3000',
//     port: '3000',
//     hostname: 'localhost',
//     hash: null,
//     search: '?api-key=foobar',
//     query: 'api-key=foobar',
//     pathname: '/1',
//     path: '/1?api-key=foobar',
//     href: 'http://localhost:3000/1?api-key=foobar'
// }


// post
// curl -d 'buy node book' http://localhost:3000

// get
// curl http://localhost:3000

// delete
// curl -X DELETE  http://localhost:3000/0?api-key=foobar

// req.url
// 如果 DELETE /1?api-key=foobar
// req.url 等于 /1?api-key=foobar
// .parse()
