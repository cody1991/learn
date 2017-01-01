var express = require('express');
var apiVersion1 = require('./api-v1.js');
var apiVersion2 = require('./api-v2.js');

var app = express();

app.use('/v1', apiVersion1);
app.use('/v2', apiVersion2);

app.listen(3000, function() {
    console.log('App started on port 3000');
});
