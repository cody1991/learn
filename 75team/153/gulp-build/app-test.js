"use strict";

var fs = require('fs'),
    through = require('through2');

fs.createReadStream('./in.txt')
    .pipe(through.obj(function(contents, enc, done) {
        if (enc === 'buffer') {
            contents = contents.toString('utf-8');
            enc = 'utf-8';
            console.log(contents, enc, done);
        }
        done(null, contents, enc);
    }))
    .pipe(through.obj(function(contents, enc, done) {
        done(null, contents.toUpperCase(), enc);
        console.log(contents, enc, done);
    }))
    .pipe(through.obj(function(contents, enc, done) {
        contents = contents.split("").reverse().join("");
        done(null, contents, enc);
        console.log(contents, enc, done);
    }))
    .pipe(fs.createWriteStream('./out.txt'));