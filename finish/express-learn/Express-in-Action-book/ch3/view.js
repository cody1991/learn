var express = require('express');
var path = require('path');
var http = require('http');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// documentation at https://github.com/tj/ejs

app.get('/', function(request, response) {
    response.render('index', {
        message: 'Hey everyone!'
    });
});

http.createServer(app).listen(3000);
