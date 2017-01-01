var path = require('path');

var cache = {};

function store(key, value) {
    cache[path.normalize(key).replace(/\\/g, '/')] = value;
}

store('foo/bar', 1);
store('foo//baz//../bar', 2);

console.log(cache);


// 将传入的多个路径拼接为标准路径。该方法可避免手工拼接路径字符串的繁琐，并且能在不同系统下正确使用相应的路径分隔符。

console.log(path.join('foo/', 'baz/', '../bar'));
// => "foo/bar"


// 当我们需要根据不同文件扩展名做不同操作时，该方法就显得很好用。以下是一个例子：

console.log(path.extname('foo/bar.js'));
// => ".js"