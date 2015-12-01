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
4   Map参数：Map参数是用来解决同一个模块不同版本的问题，比如在项目开发中，开发初期使用了jquery1.7版本，但是由于业务的需求需要引入jquery1.9以上的版本时候，但是又担心有些是依赖于jquery1.7的代码升级到1.9以上的时候会有问题，因此可以让一部分代码还是依赖于jquery1.7,薪增的代码依赖于jquery1.9.
5   config参数。 config是指需要将配置信息传给一个模块，这些配置往往是application级别的信息，需要一个手段将他们向下传递给模块。在requireJS中，基于requirejs.config()的config配置项来实现。要获取这些信息的模块可以加载特殊的依赖 ”moudle” ,并调用module.config().
6   内部机制：RequireJS加载的每个模块作为script Tag，使用head.appendChild()方法。在模块的定义时，requireJS等到所有的依赖都加载完毕，会为函数的调用计算出正确的顺序，然后在函数中通过正确的顺序进行调用。
7   requireJS函数增加了第三个参数errbacks: function(err){}
8   在模块载入失败回调中可以使用undef函数移除模块的注册。