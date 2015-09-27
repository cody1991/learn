var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname)))

var demoList = ['1-attributes', '2-case', '3-code'],
    demoListLen = demoList.length;

app.get('/', function(req, res) {
    res.render('index', {
        pageTitle: 'hello jade',
        youAreUsingJade: true,
        demoList: demoList
    });
});

demoList.forEach(function(value, index) {
    console.log(value)
    app.get('/' + value, function(req, res) {
        res.render(value, {
            pageTitle: value
        })
    })
});

var server = http.createServer(app);
var port = 8083;
server.listen(port);
console.log('server started on localhost:' + port);


// lsof -i :3000
// kill -9 <PID>
