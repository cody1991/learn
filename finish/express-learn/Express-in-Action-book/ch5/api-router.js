var express = require('express');

var api = express.Router();

api.use(function(req, res, next) {
    console.log('start router');
    next();
});

api.get('/users', function(req, res) {
    res.send('get users');
});

api.get('/user', function(req, res) {
    res.send('get user');
});

module.exports = api;
