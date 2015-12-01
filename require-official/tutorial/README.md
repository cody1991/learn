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

---

1   baseUrl: 指定本地模块的基准目录，即本地模块的路径是相对于那个目录的，该属性通常有requireJS加载时的data-main属性指定。
2   paths:  paths是映射那些不直接放在baseUrl指定的目录下的文件，设置paths的起始位置是相对于baseUrl的，除非该path设置是以”/”开头或含有URL协议(http://或者https://).
3   shim参数 解决了使用非AMD方式定义的模块(如jquery插件)及其载入顺序，为那些没有使用define()来声明依赖关系，设置模块的”浏览器全局变量注入”型脚本做依赖和导出配置。