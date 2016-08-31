var enforceSSL = require('express-enforces-ssl'),
    express = require('express');

var app = express();

app.enable('trust proxy');
app.use(enforceSSL());
