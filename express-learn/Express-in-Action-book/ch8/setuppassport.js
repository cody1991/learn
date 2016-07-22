var passport = require('passport');

var User = require('./models/user');

var LocalStrategy = require('passport-local').Strategy;

passport.use('login', new LocalStrategy(function(username, password, done) {
    User.findOne({
        username: username
    }, function(err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, {
                message: 'No user has that username!'
            });
        }
        user.checkPassword(password, function(err, isMatch) {
            if (err) {
                return done(err);
            }
            if (isMatch) {
                return done(null, user);
            } else {
                return done(null, false, {
                    message: 'Invalid password.'
                });
            }
        })
    })
}));

module.exports = function() {
    passport.serializeUser(function(user, done) {
        // serializeUser should turn a user object into an ID. You call done with no error and the user’s ID.
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        // deserializeUser should turn the ID into a user object. Once you’ve finished, you call done with any errors and the user object.
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
}
