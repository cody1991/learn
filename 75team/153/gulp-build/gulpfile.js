// 页面 js 存放在 ./static/js 下，公共的库放在 ./static/js/lib 下，公共库只压缩不合并，页面 js 压缩并合并。

// 页面 css 存放在 ./static/css 下，公共的css放在 ./static/css/common 下，公共 css 只压缩不合并，页面 css 压缩并合并。

// 图片资源中小于3kb的图片以 base64 方式内联，图片放在 ./static/img 下。

var gulp = require('gulp');
var through = require('through2');
var HTMLMinifier = require('html-minifier').minify;
var fs = require('fs');
var UglifyJS = require('uglify-js');
var CleanCSS = require('clean-css');
var path = require('path');

gulp.task('sync1', function() {
    console.log('我是一个同步任务');
});

gulp.task('sync2', function() {
    console.log('我是另外一个同步任务');
});

gulp.task('sync3', function() {
    console.log('我是又一个同步任务');
});

gulp.task('async', function(done) {
    console.log('老大喊我去搬砖');
    setTimeout(function() {
        console.log('我是一个异步任务');
        done();
    }, 2000);
});

// 我们看到说 gulp.task 可以有依赖，只要第二个参数传一个数组，中间加上依赖的任务就行了，而数组里面的这些任务是并行处理的，不会一个执行完才执行另一个（同步任务的输出比异步任务的结束早）。
gulp.task('syncs', ['async', 'sync1', 'sync2', 'sync3'], function() {
    console.log('搬砖完了');
});

gulp.task('src-dist', function() {
    gulp.src('./**/*.html')
        .pipe(gulp.dest('./dist'));

    // 这样处理的 html 文件不仅仅匹配当前目录下的，还包括所有子目录里。
    // gulp.task("src-dist", function() {
    //     gulp.src("./**/*.html")
    //         .pipe(gulp.dest("./dist"));
    // });
});


// gulp.src 的输入流和 fileReadStream 会有一点点不一样，它的第一个参数不是一个 Buffer，而是一个包含文件信息和文件内容的对象，第二个参数是文件的编码，因此我们可以通过

// var contents = file.contents.toString(encode);

// 将文件内容转成字符串。之后，我们使用 html-minifier 对文件的HTML内容和内联的样式、脚本进行压缩，这样就简单完成了首页 index.html 的优化！
gulp.task('build-index', ['build-js-lib', 'build-common-css', 'build-img'], function() {
    gulp.src('./index.html')
        .pipe(through.obj(function(file, encode, cb) {
            var contents = file.contents.toString(encode);

            var $ = require('cheerio').load(contents, {
                decodeEntitties: false
            });
            var links = $('link');
            var cssToCombo = [];

            for (var i = 0; i < links.length; i++) {
                var link = $(links[i]);
                if (link.attr('rel') === 'stylesheet') {
                    var href = link.attr('href');
                    if (/^static\/css\/(?!common)/.test(href)) {
                        cssToCombo.push(href);
                        if (cssToCombo.length == 1) {
                            link.attr('href', 'static/css/index.min.css');
                        } else {
                            link.remove();
                        }
                    }
                }
            }

            minifyAndComboCSS('index.min.css', encode, cssToCombo);

            var scripts = $('script');
            var jsToCombo = [];

            for (var i = 0; i < scripts.length; i++) {
                var s = $(scripts[i]);

                if (s.attr('type') == null || s.attr('type') === 'text/javascript') {
                    var src = s.attr('src');

                    if (src) {
                        if (/^static\/js\/(?!lib)/.test(src)) {
                            jsToCombo.push(src);
                            if (jsToCombo.length == 1) {
                                s.attr('src', 'static/js/index.min.js');
                            } else {
                                s.remove();
                            }
                        }
                    }
                }
            }

            minifyAndComboJS('index.min.js', encode, jsToCombo);

            var imgs = $('img');
            for (var i = 0; i < imgs.length; i++) {
                var img = $(imgs[i]);
                var src = img.attr('src');
                if (/^static\/images/.test(src)) {
                    var stat = fs.statSync(src);
                    var ext = path.parse(src).ext;

                    if (stat.size <= 3000) {
                        var head = ext === '.png' ? "data:image/png;base64," : "data:image/jpeg;base64,";
                        var datauri = fs.readFileSync(src).toString('base64');
                        img.attr('src', head + datauri);
                    }
                }
            }

            contents = $.html();

            var minified = HTMLMinifier(contents, {
                minifyCSS: true,
                minifyJS: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            });

            file.contents = new Buffer(minified, encode);
            cb(null, file, encode);
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build-img', function() {
    gulp.src('./static/images/**/*')
        .pipe(gulp.dest('./dist/static/images'));
});

gulp.task('build-js-lib', function() {
    gulp.src('./static/js/lib/**/*.js')
        .pipe(through.obj(function(file, encode, cb) {
            var contents = file.contents.toString(encode);

            var minified = UglifyJS.minify(contents, {
                fromString: true
            }).code;

            file.contents = new Buffer(minified, encode);
            cb(null, file, encode);
        }))
        .pipe(gulp.dest('./dist/static/js/lib'));
});

gulp.task('build-common-css', function() {
    gulp.src('./static/css/common/**/*.css')
        .pipe(through.obj(function(file, encode, cb) {
            var contents = file.contents.toString(encode);
            var minified = new CleanCSS().minify(contents).styles;

            file.contents = new Buffer(minified, encode);
            cb(null, file, encode);
        }))
        .pipe(gulp.dest('./dist/static/css/common'));
})


function minifyAndComboJS(name, encode, files) {
    var content = '';

    files.forEach(function(js) {
        var minified = UglifyJS.minify(js).code;
        content += minified;
    });

    if (content) {
        var combo = 'static/js/' + name;
    }

    fs.writeFileSync(combo, content);

    gulp.src(combo)
        .pipe(gulp.dest('./dist/static/js'));
}

function minifyAndComboCSS(name, encode, files) {
    var content = '';

    files.forEach(function(css) {
        var contents = fs.readFileSync(css, encode);
        var minified = new CleanCSS().minify(contents).styles;
        content += minified;
    });

    if (content) {
        var combo = 'static/css/' + name;
    }

    fs.writeFileSync(combo, content);

    gulp.src(combo)
        .pipe(gulp.dest('./dist/static/css'));
}