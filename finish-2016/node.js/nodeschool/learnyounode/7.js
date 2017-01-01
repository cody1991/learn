// var http = require('http');

// http.get(process.argv[2], function(res) {
//     var result = '';

//     res.setEncoding('utf-8');
//     res.on('data', function(data) {
//         result += data;
//     });
//     res.on('end', function() {
//         console.log(result.length);
//         console.log(result);
//     });
// });

var http = require('http'),
    bl = require('bl');

http.get(process.argv[2], function(res) {
    res.pipe(bl(function(err, data) {
        if (err) {
            return console.error(err);
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});
