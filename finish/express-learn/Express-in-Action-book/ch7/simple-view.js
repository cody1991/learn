var express = require('express'),
    path = require('path');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(3000);
