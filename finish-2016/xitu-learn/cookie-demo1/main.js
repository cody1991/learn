const express = require('express');
const app = express();

app.listen(3000, err => {
    if (err) {
        return console.log(err);
    }
    console.log('--- 打开 http://localhost:3000 ---');
});

// 1. 首先，我们假设当前域名下还是没有 Cookie 的
// 2. 接下来，浏览器发送了一个请求给服务器（这个请求是还没带上 Cookie 的）
// 3. 服务器设置 Cookie 并发送给浏览器（当然也可以不设置）
// 4. 浏览器将 Cookie 保存下来
// 5. 接下来，以后的每一次请求，都会带上这些 Cookie，发送给服务器

app.get('/', (req, res) => {

    res.cookie('testName', 'testValue', {
        expires: new Date(Date.now() + 10000)
    });
    res.cookie('testName0', 'testValue0', {
        // express 这个参数是以毫秒来做单位的
        // 实际发送给浏览器就会转换为秒
        // 十秒后失效
        expires: new Date(Date.now() + 8000),
        maxAge: 10000
    });
    // secure 选项用来设置 Cookie 只在确保安全的请求中才会发送。当请求是 HTTPS 或者其他安全协议时，包含 secure 选项的 Cookie 才能被保存到浏览器或者发送至服务器。

    // 默认情况下，Cookie 不会带 secure 选项(即为空)。所以默认情况下，不管是 HTTPS 协议还是 HTTP 协议的请求，Cookie 都会被发送至服务端。
    res.cookie('testName1', 'testValue1', {
        secure: true
    });
    res.cookie('testName2', 'testValue2', {
        // 这个选项用来设置 Cookie 是否能通过 js 去访问。默认情况下，Cookie 不会带 httpOnly 选项(即为空)，客户端是可以通过 js 代码去访问（包括读取、修改、删除等）这个 Cookie 的。当 Cookie 带 httpOnly 选项时，客户端则无法通过 js 代码去访问（包括读取、修改、删除等）这个 Cookie。
        httpOnly: true
    });
    res.cookie('testName3', 'testValue3');

    // Cookie 就是浏览器储存在用户电脑上的一小段文本文件
    // Cookie 是纯文本格式，不包含任何可执行的代码
    // Cookie 由键值对构成，由分号和空格隔开
    // Cookie 虽然是存储在浏览器，但是通常由服务器端进行设置
    // Cookie 的大小限制在 4kb 左右

    res.send('<h1>Hello world!</h1>');
});

app.get('/parent', (req, res) => {
    res.cookie('parent-name', 'parent-value', {
        path: '/parent'
    });
    res.send('<h1父</h1>')
});

app.get('/parent/childA', (req, res) => {
    res.cookie('child-name-A', 'child-value-A', {
        path: '/parent/childA'
    })
    res.send('<h1>子路径A!</h1>')
});

app.get('/parent/childB', (req, res) => {
    res.cookie('child-name-B', 'child-value-B', {
        path: '/parent/childB'
    })
    res.send('<h1>子路径B!</h1>')
})
