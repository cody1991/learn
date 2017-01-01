var express = require('express'),
    path = require('path');

var app = express();

app.use(express.static(path.resolve(__dirname, './')));

app.listen(3000, function() {
    console.log('listening 3000');
});
