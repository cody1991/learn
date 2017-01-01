module.exports = (app) => {
    app.get('/', function(req, res) {
        res.redirect('/posts');
    });

    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));
    app.use('/posts', require('./posts'));

    app.use((req, res, next) => {
        if (!res.headersSent) {
            res.render('404');
        }
    });

}
