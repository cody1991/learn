var fs = require('fs');

fs.readFile('./1.txt', function(err, file) {
    console.log(arguments);
    console.log('file : ' + file);
});

console.log('发起读取文件');
