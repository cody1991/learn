var superagent = require('superagent');
var cheerio = require('cheerio');

superagent
    .get('http://m.weibo.cn/u/1841981352')
    .end(function(err, res) {
        var $ = cheerio.load(res.text);
        
        var data = $('script')[1].children[0].data;

        var data2 = data.slice(data.indexOf('$render_data = ') + '$render_data = '.length);

        data2 = data2.slice(0,-1);

        var data3 = eval("("+data2+")")
        console.log(data3.stage)
    });
