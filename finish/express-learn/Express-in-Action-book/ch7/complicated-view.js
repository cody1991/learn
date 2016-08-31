var express = require('express'),
    path = require('path'),
    ejs = require('ejs');

var app = express();

app.locals.appName = 'Song Lyrics';

app.set('view engine', 'jade');
app.set('views', path.resolve(__dirname, 'views'));
app.engine('html', ejs.renderFile);

app.use(function(req, res, next) {
    res.locals.userAgent = req.headers['user-agent'];
    next();
});

app.get('/about', function(req, res) {
    res.render('about', {
        currentUser: 'india-arie123'
    });
});

app.get('/contact', function(req, res) {
    res.render('contact.ejs');
});

app.use(function(req, res) {
    res.status(404);
    res.render('404.html', {
        urlAttempted: req.url
    });
});

app.listen(3000);

// The documented way—There’s an option that you can set on the app. If
// app.enabled("view cache") is truthy, Express will cache the lookup of
// the view. By default, this is disabled in development mode and enabled in
// production, but you can change it yourself with app.enable("view
// cache") or app.disable("view cache").

// The undocumented way—If the context object generated in the previous
// step has a truthy property called cache, then caching will be enabled for
// that view. This overrides any application settings. This enables you to
// cache on a view-by-view basis, but I think it’s more important to know that
// it’s there so that you can avoid doing it unintentionally
