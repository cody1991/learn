var path = require('path'),
    express = require('express'),
    zipdb = require('zippity-do-dah'),
    forecastio = require('forecastio');

var app = express();
var weather = new forecastio('badf6c12b06feaae48170aefe675877d');

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.get('/', function(req, res, next) {
//     if (req.query.zip) {
//         var zipcode = req.query.zip;
//         console.log(zipcode);

//         var location = zipdb.zipcode(zipcode);

//         if (!location.zipcode) {
//             next();
//             return;
//         }

//         var latitude = location.latitude;
//         var longitude = location.longitude;

//         weather.forecast(latitude, longitude, function(err, data) {
//             if (err) {
//                 next();
//                 return;
//             }
//             res.json({
//                 zipcode: zipcode,
//                 temperature: data.currently.temperature
//             });
//         });
//     } else {
//         res.render('index');
//     }
// });

// app.get(/^\/(d{5})$/, function(req, res, next) {

// });

app.get('/', function(req, res) {
    res.render('index');
});

app.get(/^\/(\d{5})$/, function(req, res, next) {
    var zipcode = req.params[0];
    var location = zipdb.zipcode(zipcode);

    if (!location.zipcode) {
        next();
        return;
    }

    var latitude = location.latitude;
    var longitude = location.longitude;

    weather.forecast(latitude, longitude, function(err, data) {
        if (err) {
            next();
            return;
        }
        res.json({
            zipcode: zipcode,
            temperature: data.currently.temperature
        });
    });
})

app.use(function(req, res) {
    res.status(404).render('404');
});

app.listen(3000);
