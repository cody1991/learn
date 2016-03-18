var page = require('webpage').create();

page.open('http://www.tuicool.com/articles/beeMNj/',function(){
    page.render('1.png');
    phantom.exit();
});