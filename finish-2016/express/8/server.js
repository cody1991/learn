var express = require('express'),
    fortune = require('./lib/fortune'),
    weather = require('./lib/weather'),
    bodyParser = require('body-parser'),
    formidable = require('formidable');

var handlebars = require('express-handlebars').create({
    defaultLayout: 'main',
    helpers: {
        section: function(name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
});

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));


app.use(function(req, res, next) {
    if (!res.locals.partials) res.locals.partials = {};
    res.locals.partials.weatherContext = weather.getWeatherData();
    next();
});

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

app.get('/header', function(req, res) {
    res.set('Content-Type', 'text/plain');
    var s = '';
    for (var name in req.headers) {
        s += name + ': ' + req.headers[name] + '\n';
    }
    res.send(s);
});

app.get('/jquerytest', function(req, res) {
    res.render('jquerytest');
});

app.get('/nursery-rhyme', function(req, res) {
    res.render('nursery-rhyme');
});

app.get('/data/nursery-rhyme', function(req, res) {
    res.json({
        animal: 'squirrel',
        bodyPart: 'tail',
        adjective: 'bushy',
        noun: 'heck',
    });
});


app.get('/newsletter', function(req, res) {
    // 以后会学习CSRF 这里提供虚拟
    res.render('newsletter', {
        csrf: 'CSRF token goes here'
    });
});

app.get('/newsletter-ajax', function(req, res) {
    // 以后会学习CSRF 这里提供虚拟
    res.render('newsletter-ajax', {
        csrf: 'CSRF token goes here'
    });
});

app.post('/process', function(req, res) {

    if (req.xhr || req.accepts('json,html') === 'json') {
        res.send({
            success: true
        });
    } else {
        res.redirect(303, '/thank-you');
    }

    console.log('Form (from querystring): ' + req.query.form);

    console.log('CSRF token(from hidden form field): ' + req.body._csrf);

    console.log('Name (from visible form field):' + req.body.name);

    console.log('Email (from visible form field):' + req.body.email);


    // // 301 重定向是永久的，浏览器会缓存重定向目标，如果用301 重定向并且视图第二次提交表单，浏览器会绕过 /process处理程序直接进入 thankyou
    // // 303 告诉浏览器，你的请求有效，可以在这里找到相应，不会缓存重定向目标
    // res.redirect(303, '/thank-you');
});

app.get('/thank-you', function(req, res) {
    res.render('thank-you');
});


app.get('/contest/vacation-photo', function(req, res) {
    var now = new Date();
    res.render('contest/vacation-photo', {
        year: now.getFullYear(),
        month: now.getMonth()
    })
});

app.post('/contest/vacation-photo/:year/:month', function(req, res) {

    console.log(req.params.year)

    console.log(req.url);

    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
        if (err) {
            return res.redirect(303, '/thank-you');
        }
        console.log('received fields:');
        console.log(fields);
        console.log('received files');
        console.log(files);
        res.redirect(303, '/thank-you');
    });
});


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