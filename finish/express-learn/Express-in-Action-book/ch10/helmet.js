var helmet = require('helmet');
var ms = require('ms');
var csrf = require('csurf');

app.use(csrf());
// Include a body parser and session middleware before this
app.use(helmet.hsts({
    maxAge: ms('1 year'),
    includeSubdomains: true
}));
app.use(helmet.xssFilter());

app.get('/', function(req, res) {
    res.render('myview', {
        csrfToken: req.csrfToken()
    });
});

// <form method="post" action="/submit">
// <input name="_csrf" value="<%= csrfToken %>" type="hidden">
// <! -- … -->
// </form>

// app.use(function(err, req, res, next) {
// if (err.code !== "EBADCSRFTOKEN") {
// next(err);
// return;
// }
// res.status(403);
// res.send("CSRF error.");
// });
