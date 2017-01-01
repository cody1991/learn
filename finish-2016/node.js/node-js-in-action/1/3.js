// 数据流 来一点处理一点

var fs = require('fs');

var stream = fs.createReadStream('./resource.json');

stream.on('data', function(data) {
    console.log(data);
});

stream.on('end', function() {
    console.log('finished');
});
