;
define("app2/e", function(){});

define('app/d',['require','exports','module','app2/e'],function(require, exports, module) {
    var d = require('app2/e')
    console.log(1);
});

define('app/c',['require','exports','module','app/d'],function(require, exports, module) {
    var d = require('app/d');
});
define('app/b',['require','exports','module','app/c'],function(require, exports, module) {
    var c = require('app/c');
});
define('app/a',["app/b"], function(b) {
    return {
        "name": 1
    }
});

require.config({});

require(['app/a'], function(a) {

});

// r.js

// node r.js -o baseUrl=js name=app out=build.js


// -o： 表示优化，该参数是固定的，必选。

// baseUrl：指存模块的根目录，可选。

// name： 模块的入口文件，这里是app,那么r.js会从baseUrl+name去查找app.js，然后找出所有依赖的模块，然后进行合并与压缩。

// out: 指合并压缩后输出的文件路径，这里是直接输出在根目录下build.js 我们也可以输出到其他目录下 比如js/app 目录下，也可以的。

// 上面的demo已经可以对有依赖的模块进行合并与压缩了，但是目前还不能满足我们的需求，因为代码已经合并且压缩了，对于我们调式代码并不是很方便，所以我接下来给大家来介绍另外1个参数：optimize(none/uglify/colsure)，指定是否压缩，默认为uglify。我们可以指定为none，只合并不压缩。代码如下：

// node r.js -o baseUrl=js name=app out=build.js optimize=none

// 我们现在也可以先安装r.js,安装如下：

// npm install –g requirejs;
define("app", function(){});

