var express = require('express'),
    path = require('path'),
    app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.get('/', function(req, res) {
    res.render('ejsDemo', {
        name: 'cody',
        birthyear: 1991,
        career: 'front end developer',
        bio: "<b>Tony Hawk</b> is the coolest skateboarder around."
    });
});

app.listen(3000);
