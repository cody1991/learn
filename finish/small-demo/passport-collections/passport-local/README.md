# Configure Strategy

The local authentication strategy authenticates users using a username and password. The strategy requires a verify callback, which accepts these credentials and calls done providing a user.

    passport.use(new LocalStrategy(
      function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false); }
          if (!user.verifyPassword(password)) { return done(null, false); }
          return done(null, user);
        });
      }
    ));

## Available Options

This strategy takes an optional options hash before the function, e.g. new LocalStrategy({/* options */, callback}).

The available options are:

* usernameField - Optional, defaults to 'username'
* passwordField - Optional, defaults to 'password'

Both fields define the name of the properties in the POST body that are sent to the server.

## Parameters

By default, LocalStrategy expects to find credentials in parameters named username and password. If your site prefers to name these fields differently, options are available to change the defaults.

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'passwd',
        session: false
      },
      function(username, password, done) {
        // ...
      }
    ));

When session support is not necessary, it can be safely disabled by setting the session option to false.

The verify callback can be supplied with the request object by setting the passReqToCallback option to true, and changing callback arguments accordingly.

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'passwd',
    passReqToCallback: true,
    session: false
  },
  function(req, username, password, done) {
    // request object is now first argument
    // ...
  }
));

## Authenticate Requests

Use passport.authenticate(), specifying the 'local' strategy, to authenticate requests.

For example, as route middleware in an Express application:

    app.post('/login', 
      passport.authenticate('local', { failureRedirect: '/login' }),
      function(req, res) {
        res.redirect('/');
      });



