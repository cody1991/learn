var express = require('express'),
    fortune = require('./lib/fortune');

var handlebars = require('express-handlebars').create({
    defaultLayout: 'main'
});

var app = express();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    // 默认状态码是 200

    // res.type('text/plain');
    // res.send('Shenzehn Travel');

    res.render('home');
});

app.get('/about', function(req, res) {
    // res.type('text/plain');
    // res.send('About Shenzhen Travel');

    res.render('about', {
        fortune: fortune.getFortune()
    });
});

app.get('/tours/hood-river', function(req, res) {
    res.render('tours/hood-river');
});

app.get('/tours/request-group-rate', function(req, res) {
    res.render('tours/request-group-rate');
})

// 定制404页面
app.use(function(req, res) {
    res.status(404);

    // res.type('text/plain');
    // res.send('404 - Not Found');

    res.render('404');
});

// 定制500页面
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);

    // res.type('text/plain');
    // res.send('500 - Server Error');
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port') + '.');
});