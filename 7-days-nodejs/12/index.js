var querystring = require('querystring');

// 模块用于实现URL参数字符串与参数对象的互相转换


console.log(querystring.parse('foo=bar&bar=qux&bar=quux&corge'));


console.log(querystring.stringify({
    foo: 'bar',
    baz: ['qux', 'quux'],
    corge: ''
}));
