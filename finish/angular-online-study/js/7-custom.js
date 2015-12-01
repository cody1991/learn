(function() {
    // 自定义指令中使用AngularJS扩展HTML的功能。自定义指令使用的“指令”的功能定义。自定义指令只是替换了它被激活的元素。引导过程中AngularJS应用程序找到了匹配的元素，并做好使用自定义指令compile()方法一次活动再处理使用基于指令的范围自定义指令link()方法的元素。 AngularJS提供支持，以下列元素的类型来创建自定义指令。

    // Element directives - 指令遇到时激活一个匹配的元素。

    // Attribute - - 指令遇到时激活一个匹配的属性。

    // CSS - - 指令遇到时激活匹配CSS样式。

    // Comment - - 指令遇到时激活匹配的注释。

    var app = angular.module('app', []);

    // Create a directive, first parameter is the html element to be attached.
    // We are attaching student html tag. 
    // This directive will be activated as soon as any student element is encountered in html
    app.directive('student', function() {
        // define the directive object
        var directive = {};
        // restrict = E, signifies that directive is Element directive
        directive.restrict = 'E';
        // template replaces the complete element with its text. 
        directive.template = "Student:<b>{{student.name}}</b>,Roll No:<b>{{student.rollno}}</b>";
        // scope is used to distinguish each student element based on criteria.
        directive.scope = {
                student: "=name"
            }
            // compile is called during application initialization. AngularJS calls it once when html page is loaded.
        directive.compile = function($scope, element, attributes) {
            element.$$element[0].style.border = '1px solid #ccc';
            // //linkFunction is linked with each element with scope to get the element specific data.
            var linkFunction = function($scope, element, attributes) {

                console.log($scope.student)

                element[0].innerHTML = 'Student:<b>' + $scope.student.name + "</b>,Roll No: <b>" + $scope.student.rollno;
                element[0].style.backgroundColor = '#ff00ff';
            }
            return linkFunction;
        }

        return directive;
    });

    app.controller('demoController', function($scope) {
        $scope.cody = {};
        $scope.cody.name = 'Cody';
        $scope.cody.rollno = 1;

        $scope.bear = {};
        $scope.bear.name = 'Bear';
        $scope.bear.rollno = 2;

    });
})();
