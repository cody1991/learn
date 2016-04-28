var express = require('express'),
    fortune = require('./lib/fortune'),
    weather = require('./lib/weather'),
    credentials = require('./credentials');

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
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.use(require('cookie-parser')(credentials.cookieSecret));
app.use(require('express-session')({
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 80000
    },
    secret: 'cody1991',
    name: 'Cody'
}));

app.use(function(req, res, next) {
    if (!res.locals.partials) res.locals.partials = {};
    res.locals.partials.weatherContext = weather.getWeatherData();
    next();
});

app.get('/', function(req, res) {
    // 默认状态码是 200

    // res.type('text/plain');
    // res.send('Shenzehn Travel');

    res.cookie('monster', 'nom nom');
    res.cookie('signed_monster', 'nom nom', {
        signed: true
    });

    var monster = req.cookies.monster;
    console.log(monster);
    var signedMonster = req.signedCookies.signed_monster;
    console.log(signedMonster);

    res.clearCookie('monster');

    // res.session.userName = 'Cody';


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