var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');

var setUpPassport = require('./setuppassport.js');

var routes = require('./routes.js');

var app = express();

mongoose.connect('mongodb://localhost:27017/test');
setUpPassport();

// console.log(mongoose.connect('mongodb://localhost:27017/test'));

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Setting body-parser’s extended option to false makes the parsing simpler and more secure. 
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.use(session({
    secret: "TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX",
    resave: true,
    saveUninitialized: true
}));
// secret allows each session to be encrypted from the clients. This deters hackers from hacking into users’ cookies. As noted, it needs to be a bunch of random characters.
// resave is option required by the middleware. When it’s set to true, the session will be updated even when it hasn’t been modified.
// saveUninitialized is another required option. This resets sessions that are uninitialized.

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(app.get('port'), function() {
    console.log('Server started on port ' + app.get('port'));
});
