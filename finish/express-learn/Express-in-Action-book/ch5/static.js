var express = require('express'),
    path = require('path'),
    http = require('http'),
    app = express();

var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

var userUploadsPath = path.resolve(__dirname, 'user_uploads');
app.use(express.static(userUploadsPath));
// Now web browsers and other clients can visit your offensive photos at a path other
// than the root. Note that this can be done for any middleware, not only the static file
// middleware. Perhaps the biggest example is the one you just saw: mounting Express’s
// routers at a prefix.

var photoPath = path.resolve(__dirname, 'offensive-photos-folder');
app.use('/offensive', express.static(photoPath));

// app.use('/public',express.static(publicPath));
// app.use('/uploads',express.static(userUploadsPath));


// app.use(function(req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });

//     res.end('Looks like you didn"t find a static file');
// });

// app.get('/users/:userid/profile_photo', function(req, res) {
//     res.sendFile(getProfilePhotoPath(req.params.userid));
// });


http.createServer(app).listen(3000);
