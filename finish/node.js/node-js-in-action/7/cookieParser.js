var connect = require('connect'),
    cookieParser = require('cookie-parser');

// console.log(connect());

var app = connect()
    .use(cookieParser('tobi is a cool ferret'))
    .use(function(req, res) {
        res.setHeader('Set-Cookie', 'fooo=bar');
        res.setHeader('Set-Cookie', 'tobi=ferret1;Expires=Tus,08 Jun 2021 10:18:14 GMT');

        console.log(req.cookies);
        console.log(req.signedCookies);
        res.end('hello');
    })
    .listen(3000);

// curl http://localhost:3000/ --cookie "cho=kim;greet=hello"

// 第一个会输出值
