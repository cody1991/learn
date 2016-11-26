var http = require('http');

var counter = 0;

var server = http.createServer(function(req, res) {
    counter++;
    res.write('I have been accessed ' + counter + ' times');
    res.end();
}).listen(3000);
