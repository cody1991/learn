var phonecatAnimations = angular.module('phonecatAnimations', ['ngAnimate']);

phonecatAnimations.animation('.phone', function() {
    var animateUp = function(element, className, done) {
        if (className != 'active') {
            return;
        }
        element.css({
            position: 'absolute',
            top: 500,
            left: 0,
            display: 'block'
        });

        $(element).animate({
            top: 0
        }, done);

        return function(cancel) {
            if (cancel) {
                element.stop();
            }
        }
    }
    var animateDown = function(element, className, done) {
        if (className != 'active') {
            return;
        }
        element.css({
            position: 'absolute',
            left: 0,
            top: 0
        });

        jQuery(element).animate({
            top: -500
        }, done);

        return function(cancel) {
            if (cancel) {
                element.stop();
            }
        };
    }

    return {
        addClass: animateUp,
        removeClass: animateDown
    }

    // 我们注册了addClass和removeClass回调函数，其会在.phone内部的任何元素添加或是移除类属性时调用。当.active类型被添加到元素(通过ng-class指令)，则JavaScript的addClass回调被调用，而且所对应的element作为参数传入。最后一个参数done是一个回调函数。事实上done是为了通知Angular知道JavaScript动画已经完成，从而调用以完成后续工作。
    // removeClass回调也基于同样的机制工作，不过是插入到一个类从元素中移除时。
    // 通过JavaScript的回调，我们创建了对DOM的手动操作，在代码内，这些就是element.css() 和element.animate()被执行。回调定位了下一个元素在500像素下，并移动前后两张图片，并动态同步移动以实现动画。这就是一个传送带动画，在animate功能完成后，调用done。
    // 注意:addClass和removeClass每次返回一个函数，这是一个可选项，以实现函数调用链（可以让一个动画结束后进入下一个动画——或者功能），一个布尔值被传递，让开发者知道动画是否被调用。这通常被用于在动画结束后执行一些清理工作。
});
