(function() {
    var app = angular.module('app', []);
    app.controller('demoController', function($scope, $http) {
        var url = 'data.json';
        $http.get(url).success(function(response) {
            $scope.students = response;
        });
    });
})();
