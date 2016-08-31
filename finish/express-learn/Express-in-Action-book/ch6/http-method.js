var express = require('express');

var app = express();

// curl http://localhost:3000
// curl -X POST http://localhost:3000
// curl -X PUT http://localhost:3000
// curl -X DELETE http://localhost:3000

app.get('/', function(req, res) {
    res.send('You just send a GET request');
});

app.post('/', function(req, res) {
    res.send('A post request');
});

app.put('/', function(req, res) {
    res.send('Put put put');
});

app.delete('/', function(req, res) {
    res.send('delete something!');
});

app.listen(3000, function() {
    console.log('App started on port 3000');
});
