var http = require('http'),
	fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode) {
	if (!responseCode) {
		responseCode = 200;
	}

	fs.readFile(__dirname + path, function(err, data) {
		if (err) {
			res.writeHead(500, {
				'Content-Type': 'text/plain'
			});
			res.end('500 - Internal Error');
		} else {
			res.writeHead(responseCode, {
				'Content-Type': contentType
			});
			res.end(data);
		}
	});
}


http.createServer(function(req, res) {
	console.log(1);
	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	console.log(path);

	switch (path) {
		case '':
		case '/':
			serveStaticFile(res, '/public/home.html', 'text/html');
			break;
		case '/about':
			serveStaticFile(res, '/public/about.html', 'text/html');
			break;
		case '/images/btn.png':
			serveStaticFile(res, '/public/images/btn.png', 'image/png');
			break;
		default:
			serveStaticFile(res, '/public/notfound.html', 'text/html', 404);
			break;
	}
}).listen(3000);

console.log('Server started on localhost:3000');