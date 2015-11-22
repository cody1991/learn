(function() {
    var app = angular.module('app', []);

    app.factory('MathService', function() {
        var factory = {};
        factory.multiply = function(a, b) {
            return a * b;
        }
        return factory;
    });

    app.service('CalcService', function(MathService) {
        this.square = function(a) {
            return MathService.multiply(a, a);
        }
    })

    app.controller('demoController', function($scope, CalcService) {
        $scope.square = function() {
            $scope.result = CalcService.square($scope.number);
        }
    });
})();
