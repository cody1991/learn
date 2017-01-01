var express = require('express');
var passport = require('passport');

var User = require('./models/user');

var router = express.Router();

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        req.flash('info', 'You must be logged in to see this page.');
        res.redirect('/');
    }
}

router.use(function(req, res, next) {
    // Every view will now have access to currentUser, which pulls from req.user, which is populated by Passport.
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
});

router.post('/edit', ensureAuthenticated, function(req, res, next) {
    req.user.displayName = req.body.displayname;
    req.user.bio = req.body.bio;
    req.user.save(function(err) {
        if (err) {
            next(err);
            return;
        }
        req.flash('info', 'Profile updated');
        res.redirect('/edit');
    });
})

router.get('/login', function(req, res) {
    res.render('login');
});

router.post('/login', passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: 'login',
    failureFlash: true
}));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/signup', function(req, res) {
    res.render('signup');
});

router.get('/edit', ensureAuthenticated, function(req, res) {
    res.render('edit');
});



module.exports = router;
