var express = require('express'),
    app = express();

app.get('/olivia', function(req, res) {
    res.send('Welcome to Olivia"s homepage!');
});

// app.get('/users/:userid', function(req, res) {
//     var userId = parseInt(req.params.userid, 10);

//     res.send('userId ' + userId);
// });

// app.get(/^\/users\/(\d+)$/,function(req,res){

// });

app.get(/^\/users\/(\d+)-(\d+)$/, function(req, res) {

    console.log(req.params);
    var startId = parseInt(req.params[0], 10);
    var endId = parseInt(req.params[1], 10);

    res.send(startId + ' ' + endId);
});

// xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
// where x is any hex digit and y is 8, 9, A, or B.

var horribleRegexp = /^\/users\/([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})$/i;

// console.log(horribleRegexp.test('11111111-1111-4111-8111-111111111111'));

app.get(horribleRegexp, function(req, res) {
    console.log(req.params[0]);
    res.send(req.params[0]);
});

app.get('/search', function(req, res) {
    res.send(req.query.q);
    // http://localhost:3000/search?q=javascript
});

app.use(function(req, res) {
    res.status(404).send('Page not found!');
});

app.listen(3000);
