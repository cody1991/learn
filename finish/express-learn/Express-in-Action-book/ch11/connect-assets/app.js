var express = require('express');
var assets = require('connect-assets');

var app = express();
app.set('view engine', 'ejs');
app.use(assets({
    helperContext: app.locals,
    paths: ['assets/css', 'assets/js']
}));

app.get('/', function(req, res) {
    res.render('index');
});


app.listen(3000);
