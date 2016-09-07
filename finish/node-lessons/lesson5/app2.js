var async = require('async'),
    superagent = require('superagent'),
    cheerio = require('cheerio'),
    url = require('url');

// url node.js 自带

var cnodeUrl = 'https://cnodejs.org/';

superagent.get(cnodeUrl)
    .end(function(err, res) {
        if (err) {
            return console.error(err);
        }
        var topicUrls = [];
        var $ = cheerio.load(res.text);

        $('#topic_list .topic_title').each(function(idx, element) {
            var $element = $(element);
            var href = url.resolve(cnodeUrl, $element.attr('href'));
            topicUrls.push(href);
        });

        // console.log(topicUrls);

        var concurrencyCount = 0;

        async.mapLimit(topicUrls, 5, function(url, callback) {
            console.time('耗时');
            concurrencyCount++;
            console.log('现在的并发数是：' + concurrencyCount);
            superagent.get(url)
                .end(function(err, res) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log(url);
                    var $ = cheerio.load(res.text);
                    var content = {
                        title: $('.topic_full_title').text().trim(),
                        href: url,
                        comment1: $('.reply_content').eq(0).text().trim()
                    };
                    concurrencyCount--;
                    callback(null, content);
                });
            console.timeEnd("耗时");
        }, function(err, result) {
            console.log(err);
            console.log(result);
        });
    });
