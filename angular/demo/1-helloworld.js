(function() {
    var demo = angular.module('demo', []);

    demo.filter('capitalize', function() {
        return function(input) {
            console.log(arguments);
            if (input) {
                return input[0].toUpperCase() + input.slice(1);
            }
        }
    });

    var demoController = demo.controller('demo-controller', function($scope, $timeout, $filter) {
        $scope.user = {
            name: 'default',
            clock: new Date(),
            count: 0,
            sub: {
                before: '',
                now: ''
            },
            list: ['Ari', 'like', 'Cody']
        }

        // -----------

        // function update() {
        //     $scope.user.clock = new Date();
        //     $timeout(function() {
        //         update();
        //     }, 1000);
        // }
        // update();

        var update = function() {
            $scope.user.clock = new Date();
        }
        setInterval(function() {
            $scope.$apply(update);
        }, 1000);
        update();

        // -----------

        $scope.add = function(num) {
            $scope.user.count += num;
        }

        $scope.sub = function(num) {
            $scope.user.count -= num;
        }

        $scope.$watch('user.sub.now', function(newVal, oldValue, scope) {
            if (newVal !== oldValue) {
                $scope.user.sub.before = $filter('lowercase')(oldValue);
            }
        });

        $scope.isCapitalized = function(str) {
            return str[0] == str[0].toUpperCase();
        }

    })
})();
