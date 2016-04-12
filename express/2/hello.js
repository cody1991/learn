var http = require('http');

http.createServer(function(req, res) {
	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

	switch (path) {
		case '':
		case '/':
			res.writeHead(200, {
				'Content-Type': 'text/plain'
			});
			res.end('Home page');
			break;
		case '/about':
			res.writeHead(200, {
				'Content-Type': 'text/plain'
			});
			res.end('About');
			break;
		default:
			res.writeHead(404, {
				'Content-Type': 'text/plain'
			});
			res.end('Not Found');
			break;
	}
}).listen(3000);

console.log('Server started on localhost:3000');