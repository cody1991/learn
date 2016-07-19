var express = require('express'),
    http = require('http'),
    path = require('path'),
    logger = require('morgan'),
    bodyParser = require('body-parser');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

var entries = [];

// makes this entries array avaliable in all views;
app.locals.entries = entries;

app.use(logger('dev'));

// populates a variable called req.body if the user is submitting a form(The extended options is required)
app.use(bodyParser.urlencoded({
    entended: false
}));

app.get('/', function(request, response) {
    response.render('app');
});

app.get('/new-entry', function(request, response) {
    response.render('new-entry');
});

app.post('/new-entry', function(request, response) {
    if (!request.body.title || !request.body.body) {
        response.status(400).send('Entries must have a title and a body');
    }
    entries.push({
        title: request.body.title,
        content: request.body.body,
        ,
        published: new Date()
    });

    response.redirect('/');
});

app.use(function(request, response) {
    response.status(404).render('404');
});

http.createServer(app).listen(3000, function() {
    console.log('Guestbook app started on port 3000.');
});
