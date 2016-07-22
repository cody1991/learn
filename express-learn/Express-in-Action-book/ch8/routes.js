var express = require('express');
var passport = require('passport');

var User = require('./models/user');

var router = express.Router();

router.use(function(req, res, next) {
    console.log('currentUser : ' + req.user);
    res.locals.currentUser = req.user;
    res.locals.errors = req.flash('error');
    res.locals.infos = req.flash('info');
    next();
});

router.get('/', function(req, res, next) {
    User.find()
        .sort({
            createAt: 'descending'
        }).exec(function(err, users) {
            if (err) {
                return next(err);
            }
            res.render('index', {
                users: users
            });
        });
});

router.post('/signup', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({ username: username }, function(err, user) {
        if (err) {
            return next(err);
        }
        if (user) {
            // f you find a user, you should bail out because that username already exists.
            req.flash('error', 'User already exists');
            return res.redirect('/signup');
        }

        // Creates a new instance of the User model with the username and password
        var newUser = new User({
            username: username,
            password: password
        });

        // Saves the new user to the database and continues to the next request handler
        newUser.save(next);
    });
}, passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: 'signup',
    failureFlash: true
}));

router.get('/users/:username', function(req, res, next) {
    User.findOne({
        username: req.params.username
    }, function(err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return next(404);
        }
        res.render('profile', {
            user: user
        });
    })
})

router.get('/signup', function(req, res) {
    res.render('signup');
});






module.exports = router;
