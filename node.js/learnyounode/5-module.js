var fs = require('fs'),
    path = require('path');

function read(dir, rule, callback) {
    fs.readdir(dir, function(err, lists) {
        if (err) {
            return callback(err);
        }
        lists = lists.filter(function(list) {
            return path.extname(list) == '.' + rule;
        });
        callback(null, lists);
    });
};

module.exports = read;
