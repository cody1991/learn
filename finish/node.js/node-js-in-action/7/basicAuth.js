var connect = require('connect');
var basicAuth = require('basic-auth-connect');

// var app = connect()
//     .use(basicAuth('cody', 'cody'));

var users = {
    tobi: 'foo',
    loki: 'bar',
    jane: 'baz'
};

var app = connect()
    .use(basicAuth(function(user, pass) {
        return users[user] === pass;
    }));

// 可以有callback

// app.use(basicAuth(function(user, pass, callback) {
//     User.authenticate({
//         user: user,
//         pass: pass
//     }, gotUser);

//     function gotUser(err, user) {
//         if (err) {
//             return callback(err);
//         }
//         callback(null, user);
//     }
// }));

app.listen(3000);
