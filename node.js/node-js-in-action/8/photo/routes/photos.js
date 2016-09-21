var express = require('express');
var router = express.Router();

var photos = [];
photos.push({
    name: 'node.js',
    path: 'http://nodejs.org/images/logos/nodejs-green.png'
});

photos.push({
    name: 'Ryan Speaking',
    path: 'http://nodejs.org/images/ryan-speaker.jpg'
});

router.get('/', function(req, res) {
    res.render('photos', {
        title: 'Photos',
        photos: photos
    });
});

module.exports = router;
