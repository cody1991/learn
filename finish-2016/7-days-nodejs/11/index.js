var url = require('url');

// .parse方法还支持第二个和第三个布尔类型可选参数。第二个参数等于true时，该方法返回的URL对象中，query字段不再是一个字符串，而是一个经过querystring模块转换后的参数对象。第三个参数等于true时，该方法可以正确解析不带协议头的URL，例如//www.example.com/foo/bar。
console.log(url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash'));


// 反过来，format方法允许将一个URL对象转换为URL字符串，示例如下。

console.log(url.format({
    protocol: 'http:',
    host: 'www.example.com',
    pathname: '/p/a/t/h',
    search: 'query=string'
}));

// 另外，.resolve方法可以用于拼接URL， 示例如下。

console.log(url.resolve('http://www.example.com/foo/bar', '../baz'));
