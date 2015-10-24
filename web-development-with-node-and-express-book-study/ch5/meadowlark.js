var express = require('express');

var handlebars = require('express3-handlebars').create({
    defaultLayout: 'main'
});


//  ch4   分离出 fortune 列表
var fortune = require('./lib/fortune.js');

var app = express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 3001);

app.use(function(req, res, next) {
    // 如果请求中 test = 1 出现在查询字符串中，属性 res.locals.showTests 就会被设定为 true
    // res.locals 对象 是要传给视图的上下文的一部分
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
})

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
    res.render('about', {
        fortune: fortune.getFortune(),
        pageTestScript: '/qa/tests-about.js'
    })
});

app.get('/tours/hood-river', function(req, res) {
    res.render('tours/hood-river');
});

app.get('/tours/request-group-rate', function(req, res) {
    res.render('tours/request-group-rate');
})

// 定制404
app.use(function(req, res) {
    res.status(404);
    res.render('404');
});

// 定制500
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port') + '.');
});
