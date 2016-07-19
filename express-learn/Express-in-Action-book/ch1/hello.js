var express = require('express');
var app = express();

app.get('/', function(request, response, next) {
    response.send('Hello,world!');
});

app.listen(3000, function() {
    console.log('express app started on port 3000.');
});
