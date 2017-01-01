(function() {
    var app = angular.module('app', []);
    app.controller('demoController', function($scope) {
        $scope.reset = function() {
            $scope.firstname = 'tang';
            $scope.lastname = 'cody';
            $scope.email = '476490767@qq.com';
        };

        $scope.reset();
    });
})();
