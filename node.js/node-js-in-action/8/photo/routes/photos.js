// var express = require('express');
// var router = express.Router();
var Photo = require('../models/Photo');
var path = require('path');
var fs = require('fs');
var formidable = require('formidable');

var join = path.join;

var photos = [];
photos.push({
    name: 'node.js',
    path: 'http://nodejs.org/images/logos/nodejs-green.png'
});

photos.push({
    name: 'Ryan Speaking',
    path: 'http://nodejs.org/images/ryan-speaker.jpg'
});

// router.get('/', function(req, res) {
//     res.render('photos', {
//         title: 'Photos',
//         photos: photos
//     });
// });

exports.list = function(req, res) {
    // res.render('photos', {
    //     title: 'Photos',
    //     photos: photos
    // });
    Photo.find({}, function(err, photos) {
        if (err) {
            return next(err);
        }
        res.render('photos', {
            title: 'Photos',
            photos: photos
        });
    });
}

// router.get('/upload', function(req, res) {
//     res.render('photos/upload', {
//         title: 'Photo upload'
//     });
// });

exports.form = function(req, res) {
    res.render('photos/upload', {
        title: 'Photo upload'
    });
}

exports.submit = function(dir) {
    return function(req, res, next) {

        var form = new formidable.IncomingForm();
        form.uploadDir = join(dir, 'tmp');

        form.parse(req, function(err, fields, files) {
            if (err) {
                return next(err);
            }
            // console.log(fields);
            // console.log(files);

            var img = files.image;
            var name = fields.name || img.name;
            var path = join(dir, img.name);

            console.log(img.path);

            fs.rename(img.path, path, function(err) {
                if (err) {
                    return next(err);
                }
                Photo.create({
                    name: name,
                    path: img.name
                }, function(err) {
                    if (err) {
                        return next(err);
                    }
                    res.redirect('/list');
                });
            });
        });
    }
}

exports.download = function(dir) {
    return function(req, res, next) {
        var id = req.params.id;
        Photo.findById(id, function(err, photo) {
            if (err) {
                return next(err);
            }
            var path = join(dir, photo.path);
            // res.sendfile(path);
            console.log(path);
            res.download(path);
        });
    }
}

// module.exports = router;