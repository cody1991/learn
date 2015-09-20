(function() {
    var demo = angular.module('demo', []);
    var demoController = demo.controller('demo-controller', function($scope) {

    });

    demo.directive('myDirective', function() {
        // restrict:
        // E 元素
        // A 属性
        // C 类
        // M 注释

        // 使用属性最好
        return {
            restrict: 'A',
            replace: true,
            template: '<a href="{{myUrl}}">{{myText}}</a>'
        }
    });
})();
