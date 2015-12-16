var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('phoneListController', ['$scope', '$http', function($scope, $http) {
    $scope.orderProp = 'age';
    $http.get('./phones.json').success(function(data) {
        // $scope.phones = data.slice(0, 6);
        $scope.phones = data;
    });
}]);

phonecatControllers.controller('phoneDetailController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
}])
