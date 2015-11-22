(function() {
    // 依赖注入是一个在组件中给出的替代了硬的组件内的编码它们的依赖关系的软件设计模式。这减轻一个组成部分，从定位的依赖，依赖配置。这有助于使组件可重用，维护和测试。

    // AngularJS提供了一个至高无上的依赖注入机制。它提供了一个可注入彼此依赖下列核心组件。

    // 值
    // 值是简单的JavaScript对象，它是用来将值传递过程中的配置相位控制器。

    // 工厂
    // 工厂是用于返回函数的值。它根据需求创造值，每当一个服务或控制器需要。它通常使用一个工厂函数来计算并返回对应值

    // 服务
    // 服务是一个单一的JavaScript包含了一组函数对象来执行某些任务。服务使用service()函数，然后注入到控制器的定义。

    // 提供者
    // 提供者所使用的AngularJS内部创建过程中配置阶段的服务，工厂等(相AngularJS引导自身期间)。下面提到的脚本，可以用来创建，我们已经在前面创建MathService。提供者是一个特殊的工厂方法以及get()方法，用来返回值/服务/工厂。

    // 常值
    // 常量用于通过配置相位值考虑事实，值不能使用期间的配置阶段被传递。

    var app = angular.module('app', []);
    app.controller('demoController', function($scope, CalService, defaultInput) {
        $scope.number = defaultInput;
        $scope.result = CalService.square($scope.number);

        $scope.square = function() {
            $scope.result = CalService.square($scope.number);
        }
    });

    app.config(function($provide) {
        $provide.provider('MathService', function() {
            this.$get = function() {
                var factory = {};
                factory.multiply = function(a, b) {
                    return a * b;
                }
                return factory;
            };
        });
    });

    app.value('defaultInput', 5);

    app.factory('MathService', function() {
        var factory = {};
        factory.multiply = function(a, b) {
            return a * b;
        }
        return factory;
    });

    app.service('CalService', function(MathService) {
        this.square = function(a) {
            return MathService.multiply(a, a);
        }
    });

})();
