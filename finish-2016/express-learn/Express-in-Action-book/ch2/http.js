var http = require('http');

function requestHandler(request, response) {
    console.log('In comes a request to : ' + request.url);

    if (request.url === '/') {
        response.end('Welcome to the home page!');
    } else if (request.url === '/about') {
        response.end('Welcome to the about page!');
    } else {
        response.end('Error!File not found');
    }
}

var server = http.createServer(requestHandler);

server.listen(3000);
