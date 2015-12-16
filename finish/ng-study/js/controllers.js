var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('phoneListController', ['$scope', 'Phone', function($scope, Phone) {
    $scope.orderProp = 'age';
    // $http.get('./data/phones.json').success(function(data) {
    //     // $scope.phones = data.slice(0, 6);
    //     $scope.phones = data;
    // });
    $scope.phones = Phone.query();
}]);

phonecatControllers.controller('phoneDetailController', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
    // $http.get('./data/' + $routeParams.phoneId + '.json').success(function(data) {
    //     $scope.phone = data;
    //     $scope.mainImageUrl = data.images[0];
    // });
    $scope.phone = Phone.get({
        phoneId: $routeParams.phoneId
    }, function(phone) {
        $scope.mainImageUrl = phone.images[0];
    })

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}])
