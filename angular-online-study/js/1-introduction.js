(function() {
    var app = angular.module('app', []);
    app.controller('demoController', function($scope) {
        $scope.hello = {};
        $scope.clickCounter = 0;
        $scope.hello.title = 'AngularJS';
        $scope.student = {
            firstName: '唐',
            lastName: 'cody',
            rollno: 101,
            fullName: function() {
                var studentObject;
                studentObject = $scope.student;
                return studentObject.firstName + ' ' + studentObject.lastName;
            },
            subjects: [{
                name: '物理',
                marks: 70
            }, {
                name: '化学',
                marks: 80
            }, {
                name: '数学',
                marks: 65
            }]
        };
        $scope.marks = [82, 91, 78, 77];
        $scope.quantity = 4;
        $scope.cost = 30;
    })
})();
