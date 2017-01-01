var express = require('express'),
    path = require('path'),
    app = express(),
    apiRouter = require('./api-router.js');

var staticPath = path.resolve(__dirname, 'static');
app.use(express.static(staticPath));

app.use('/api', apiRouter);

app.listen(3000);
