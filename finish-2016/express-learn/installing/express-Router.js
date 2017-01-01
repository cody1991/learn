var express = require('express');
var app = express();
var birds = require('./birds.js');

app.use('/birds', birds);

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
