var fs = require('fs');

fs.open('./fsopen.txt', 'r', function() {
    console.log(arguments);
});
