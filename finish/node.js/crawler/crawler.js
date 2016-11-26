var http = require('http'),
    fs = require('fs'),
    cheerio = require('cheerio'),
    request = require('request');

var i = 0;
var url = 'http://www.ss.pku.edu.cn/index.php/newscenter/news/2519';

function fetchPage(x) {
    startRequest(x);
}

function startRequest(x) {
    http.get(x, function(res) {
        var html = '';
        var titles = [];
        res.setEncoding('utf-8');

        res.on('data', function(chunk) {
            html += chunk;
        });

        res.on('end', function() {
            var $ = cheerio.load(html);

            var time = $('.article-info a:first-child').next().text().trim();

            var title = $('.article-title a').text().trim();

            var link = 'http://www.ss.pku.edu.cn' + $('.article-title a').attr('href');

            var anchor = $('[title=供稿]').text().trim();

            var news_item = {
                title: title,
                time: time,
                link: link,
                anchor: anchor,
                i: i = i + 1
            }

            console.log(news_item.i);

            console.log(news_item);

            title = title.replace(/\"/g, '\'').replace(/\//g, '').replace(/(\\|\:|\*|\?|\<|\>|\|)/g, '');

            savedContent($, title);
            savedImg($, title);

            var nextLink = 'http://www.ss.pku.edu.cn' + $('li.next a').attr('href');

            nextLink = nextLink.split('-');
            nextLink = encodeURI(nextLink[0]);

            if (i <= 10) {
                fetchPage(nextLink);
            }
        });
    });
}

function savedContent($, title) {
    $('.article-content p').each(function(index, item) {
        var x = $(this).text();

        // console.log('x:' + x);

        var y = x.substring(0, 2).trim();

        // console.log('y:' + y);

        if (y == '') {
            x = x + '\n';

            fs.appendFile('./datas/' + title + '.txt', x, 'utf-8', function(err) {
                // console.log(title);
                if (err) {
                    console.log('appendFile 报错啦');
                    console.log(err);
                }
            });
        }

    });
}

function savedImg($, title) {
    $('.article-content img').each(function(index, item) {
        var img_title = $(this).parent().next().text().trim();

        if (img_title == '') {
            img_title = '无名字' + index;
        }

        img_title = img_title.replace(/\"/g, '\'').replace(/\//g, '').replace(/(\\|\:|\*|\?|\<|\>|\|)/g, '');

        if (img_title.length > 35) {
            img_title = img_title.slice(0, 35);
        }

        console.log(img_title);

        var img_filename = img_title + '.jpg';
        var img_src = 'http://www.ss.pku.edu.cn' + $(this).attr('src');

        // 采用request向服务器发起一次请求，获取图片资源
        // request.head(img_src, function(err, res, body) {
        //     // console.log(res, body);
        //     if (err) {
        //         console.log(img_src);
        //         console.log(res);
        //         console.log(body);
        //         console.log('head报错啦');
        //         console.log(err);
        //     }
        // });

        if (!fs.existsSync('./images/' + title)) {
            fs.mkdirSync('./images/' + title)
        };

        console.log(img_src);
        request(img_src).pipe(fs.createWriteStream('./images/' + title + '/' + img_filename));
        console.log('报错了？');
    });
}

fetchPage(url);
