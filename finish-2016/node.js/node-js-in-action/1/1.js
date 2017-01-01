var fs = require('fs');

// fs.readFile('./resource.json', function(err, data) {
//     console.log(data);
//     console.log(data.toString());
// });

fs.readFile('./resource.json', 'utf-8', function(err, data) {
    console.log(data);
    // console.log(data.toString());
});
