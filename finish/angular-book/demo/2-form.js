(function() {
    var demo = angular.module('demo', ['ngMessages']);

    demo.directive('ngFocus', function() {
        var focus_class = 'ng-focused';
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ctrl) {
                // ctrl 是formName.inputFiledName
                console.log(ctrl);
                ctrl.$focused = false;
                element.bind('focus', function(evt) {
                    element.addClass(focus_class);
                    scope.$apply(function() {
                        ctrl.$focused = true;
                    });
                }).bind('blur', function(evt) {
                    element.removeClass(focus_class);
                    scope.$apply(function() {
                        ctrl.$focused = false;
                    });
                })
            }
        }
    })

    var demoController = demo.controller('demo-controller', function($scope) {
        // formName.inputFieldName.property;
        // property :
        // $pristine 未修改 为 true
        // $dirty 修改了的为 true 
        // $valid 合法为 true
        // $invalid 不合法为 ture
        // $error 错误的对象

        // 添加了一些 class 类名
        // .ng-pristine
        // .ng-dirty
        // .ng-valid
        // .ng-invalid

        $scope.state = {
            submitted: false
        }

        $scope.signup = function() {
            if ($scope.form.$valid) {
                console.log(arguments);
            } else {
                $scope.state.submitted = true;
            }
        }
    });
})();
