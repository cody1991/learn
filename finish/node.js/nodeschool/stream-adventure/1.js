var fs = require('fs');

var fileName = process.argv[2];

// createReadStream 读取一个文件路径作为参数

fs.createReadStream(fileName).pipe(process.stdout);

// process.stderr
