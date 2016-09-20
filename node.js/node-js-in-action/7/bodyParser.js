var connect = require('connect'),
    bodyParser = require('body-parser'),
    multipart = require('connect-multiparty');

var multipartMiddleware = multipart();

var app = connect();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(multipartMiddleware)

// app.use(function(req, res) {
//     // req.body
//     res.end('Registered new user: ' + req.body.username);
// });

app.use(function(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.end('thanks!');
});

app.listen(3000);

// 解析json数据
// curl -d '{"username":"tobi"}' -H 'Content-Type:application/json' http://localhost:3000
// Registered new user: tobi

// 解析 x-www-form-urlencoded ，无需改变代码
// curl -d username=tobi http://localhost:3000
// Registered new user: tobi
