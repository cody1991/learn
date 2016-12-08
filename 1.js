var request = require('request');
var cheerio = require('cheerio');
var path = require('path');
var fs = require('fs');
var async = require('async');
var mkdirp = require('mkdirp');
// 需要爬的网址
function getUrls() {
	var urls = [],
		baseUrl = 'http://www.mmjpg.com/mm/';
	for (var i = 484; i < 485; i++) {
		var tmp = baseUrl + i;
		urls.push(tmp);
		var dir = './mei/' + i;
		//创建目录
		mkdirp(dir, function(err) {
			if (err) {
				console.log(err);
			} else console.log(dir + '文件夹创建成功!');
		});
	}
	return urls;
}
var urls = getUrls();
async.eachSeries(urls, function(url, callback) {
	fetchUrl(url, callback);
}, function(err, result) {
	console.log('大门已经全部打开，安静等待下载吧。');
});
// 抓取网页内容
function fetchUrl(url, callback) {
	var options = {
		url: url,
		headers: {
			'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36',
			'Connection': 'keep-alive'
		}
	};
	console.log('打开新世界大门：' + options.url);
	request(options, function(error, response, body) {
		if (error) console.log(error);
		else console.log('成功打开新世界大门' + options.url);
		if (!error && response.statusCode == 200) {
			acquireData(options.url, body);
			callback(null, null);
		}
	})
}

function acquireData(url, data) {
	var $ = cheerio.load(data);
	var meizi = $('#content img').toArray();
	var mm = $('#page a').eq(6).text();
	console.log('获得:' + mm + '张妹子图');
	var list = url.split('/');
	for (var i = 1; i < mm; i++) {
		var imgsrc = path.dirname(meizi[0].attribs.src) + '/' + i + '.jpg';
		console.log(imgsrc);
		var filename = parseUrlForFileName(imgsrc); //生成文件名
		downloadImg(imgsrc, filename, './mei/' + list[4], function() {
			console.log(filename + ' done');
		});
	}
}

function parseUrlForFileName(address) {
	var filename = path.basename(address);
	return filename;
}
var downloadImg = function(uri, filename, dir, callback) {
	request({
		uri: uri,
		encoding: 'binary'
	}, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			if (!body) console.log("(╥╯^╰╥)哎呀没有内容。。。")
			fs.writeFile(dir + '/' + filename, body, 'binary', function(err) {
				if (err) {
					console.log(err);
				}
				console.log('o(*￣▽￣*)o偷偷下载' + dir + '/' + filename + ' done');
			});
		}
	});
};