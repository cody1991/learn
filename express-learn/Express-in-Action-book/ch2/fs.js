var fs = require('fs');

var options = {
    encoding: 'utf-8'
};

fs.readFile('1.txt', options, function(err, data) {
    if (err) {
        console.error('Error reading file!');
        return;
    }
    console.log(data.match(/x/gi).length + " letter X's");
});

console.log('Hello world!');
