var connect = require('connect'),
    session = require('express-session'),
    cookieParser = require('cookie-parser');

var app = connect();

// app.set('trust proxy', 1);

app
    .use(session({
        resave: false,
        saveUninitialized: true,
        secret: 'keyboard cat',
        cookie: {
            secure: false,
            maxAge: 60000
        }
    }))
    .use(function(req, res, next) {
        var sess = req.session;
        if (sess.views) {
            res.setHeader('Content-Type', 'text/html');
            res.write('<p>views: ' + sess.views + '</p>');
            res.write('<p>expires in: ' + (sess.cookie.originalMaxAge / 1000) + 's</p>');
            res.write('<p>_expires in: ' + (sess.cookie._expires / 1000) + 's</p>');
            res.write('<p>httpOnly: ' + sess.cookie.httpOnly + '</p>');
            res.write('<p>path: ' + sess.cookie.path + '</p>');
            // res.write('<p>domain: ' + sess.cookie.domain + '</p>');
            res.write('<p>secure: ' + sess.cookie.secure + '</p>');
            res.end();
            sess.views++;
        } else {
            sess.views = 1;
            console.log(sess);
            res.end('Welcome to the session demo.refresh');
        }
    })

app.listen(3000);
