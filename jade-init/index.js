var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname);
app.use(express.static(path.join(__dirname)))

app.get('/article', function(req, res) {
    res.render('article', {
        word: 'word'
    });
});

app.get('/', function(req, res) {
    res.render('index', {
        word: 'word'
    });
});


var server = http.createServer(app);
server.listen(3002);
console.log('server started on localhost:3002');
