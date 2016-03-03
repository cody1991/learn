var casper = require('casper').create({
    pageSettings: {

        // 冒充浏览器
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53'
    },
    viewportSize: {
        width: 320,
        height: 568
    }
});


casper.start();

casper.thenOpen('http://m.weibo.cn/', function() {
    casper.captureSelector('weibo.png', 'html');
});

casper.run();
