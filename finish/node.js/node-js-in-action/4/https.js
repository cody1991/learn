var https = require('https'),
    fs = require('fs');

var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./key-cert.pem')
};

https.createServer(options, function(req, res) {
    res.writeHead(200);
    res.end('Hello World');
}).listen(3000);
