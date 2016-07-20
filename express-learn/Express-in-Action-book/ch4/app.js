var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    morgan = require('morgan');

var app = express();

app.use(morgan('short'));
// 这两段可以把下面一大段的中间件去掉
var staticPath = path.join(__dirname, 'static');
app.use(express.static(staticPath));

var filePath = path.join(staticPath, '81.jpg');
app.use(function(req, res, next) {
    res.sendFile(filePath, function(err) {
        if (err) {
            // console.error('File failed to send.');
            next(new Error('Error sending file!'));
        } else {
            console.log('File sent!');
        }
    });
});

// "combined" gives a lot of info; "tiny" gives a minimal output. 

// app.use(function(req, res, next) {
//     // uses path.join to find the path where the file should be
//     var filePath = path.join(__dirname, 'static', req.url);

//     // build-in fs.stat gets info about a file
//     fs.stat(filePath, function(err, fileInfo) {
//         // if fs.stat fails continue to the next middleware
//         if (err) {
//             next();
//             return;
//         }
//         // if the file extists call res.sendFile
//         // isDirectory() or isFile()
//         if (fileInfo.isFile()) {
//             res.sendFile(filePath);
//         } else {
//             // otherwise continue to the next middleware
//             next();
//         }
//     });
// });

app.use(function(req, res) {
    res.status(404);
    res.send('File not found!');
});

app.use(function(err, req, res, next) {
    // console.error(err);
    // next(err);
    res.status(500);
    res.send('Internal server error.');
});

app.listen(3000, function() {
    console.log('App started on port 3000');
});

// At a high level, this is what the static file server middleware should do:
// 1 Check if the requested file exists in the static directory.
// 2 If it exists, respond with the file and call it a day. In code terms, this is a call to
// res.sendFile.
// 3 If the file doesn’t exist, continue to the next middleware in the stack. In code
// terms, this is a call to next.

// Express’s error-handling middleware does not handle errors that are thrown with the
// throw keyword, only when you call next with an argument.
// Express has some protections in place for these exceptions. The app will return a
// 500 error and that request will fail, but the app will keep on running. Some errors like
// syntax errors, however, will crash your server.
