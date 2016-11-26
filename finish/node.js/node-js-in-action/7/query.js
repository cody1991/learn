var connect = require('connect'),
    bodyParser = require('body-parser');

var app = connect();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    // console.log(req)
    console.log(JSON.stringify(req.body));
    res.end(JSON.stringify(req.query));
});

app.listen(3000);
