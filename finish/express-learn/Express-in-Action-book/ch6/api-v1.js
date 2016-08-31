var express = require('express');

var api = express.Router();

api.get('/timezone', function(req, res) {
    res.send('Sample response form /timezone');
});

api.get('/all_timezones', function(req, res) {
    res.send('Sample response from /all_timezones');
});

module.exports = api;
