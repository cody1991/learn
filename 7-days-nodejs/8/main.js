var fs = require('fs'),
    path = require('path');

// 同步
// function travel(dir, callback) {
//     fs.readdirSync(dir).forEach(function(file) {
//         var pathname = path.join(dir, file);

//         if (fs.statSync(pathname).isDirectory()) {
//             travel(pathname, callback);
//         } else {
//             callback(pathname);
//         }
//     });
// }

// 异步
function travel(dir, callback, finish) {
    fs.readdir(dir, function(err, files) {
        (function next(i) {
            if (i < files.length) {
                var pathname = path.join(dir, files[i]);

                fs.stat(pathname, function(err, stats) {
                    if (stats.isDirectory()) {
                        travel(pathname, callback, function() {
                            next(i + 1);
                        });
                    } else {
                        callback(pathname, function() {
                            next(i + 1);
                        });
                    }
                });
            } else {
                finish && finish();
            }
        }(0));
    });
}

// travel('./', function(pathname) {
//     console.log(pathname);
// });