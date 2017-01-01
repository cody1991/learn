var express = require('express'),
    engines = require('consolidate'),
    path = require('path'),
    app = express();

app.set('view engine', 'wal');
app.engine('wal', engines.walrus);
app.set('views', path.resolve(__dirname, 'views'));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(3000);
