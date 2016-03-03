var page = require('webpage').create();

page.open('https://www.baidu.com/', function(status) {
    page.evaluate(function() {
        console.log(document.title);
    });
    page.onConsoleMessage = function(msg){
        console.log('Page title is ' + msg);
    }
})
