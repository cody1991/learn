(function() {
    var app = angular.module('app', ['ngRoute']);


    // $routeProvider被定义为使用关键字作为'$routeProvider“下app模块的配置功能；

    // $routeProvider当定义了URL“/addStudent”映射到“addStudent.html”。

    // addStudent.html应存在于相同的路径主要的html 页面。如果htm页面没有定义，那么ng-template被id=“addStudent.html”使用。我们已经使用了ng-template；

    // “otherwise”是用来设置的默认视图；

    // “controller”是用来设置该视图对应的控制器；


    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/addStudent', {
            templateUrl: 'addStudent.html',
            controller: 'AddStudentController'
        }).when('/viewStudents', {
            templateUrl: 'viewStudents.html',
            controller: 'ViewStudentsController'
        }).otherwise({
            redirectTo: '/addStudent'
        });
    }]);

    app.controller('AddStudentController', function($scope) {
        $scope.message = "This page will be used to display add student form";
    });

    app.controller('ViewStudentsController', function($scope) {
        $scope.message = "This page will be used to display all the students";
    });

})();
