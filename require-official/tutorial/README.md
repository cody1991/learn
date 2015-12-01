参考[云溪的require教程](http://www.cnblogs.com/tugenhua0707/p/4067220.html);



AMD模板规范

- - -

    define(function() {
        return {
            mix: function(source, target) {
            }
        };
    });

- - -

有依赖项

    define(['data', 'ui'], function(data, ui) {

    });

- - -

直接一个对象

    define({
        data: [],
        ui: []
    });

- - -

具有模块名

    define('index', ['data', 'base'], function(data, base) {

    });

- - -

包装模板

    define(function(require, exports, module) {
        var base = require('base');
        exports.show = function() {
            
        }
    });