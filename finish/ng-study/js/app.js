var phonecatApp = angular.module('phonecatApp', ['ngRoute','phonecatControllers','phonecatFilters','phonecatServices','phonecatAnimations']);

phonecatApp.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'./template/phone-list.html',
        controller:'phoneListController'
    }).when('/phone/:phoneId',{
        templateUrl:'./template/phone-detail.html',
        controller:'phoneDetailController'
    }).otherwise({
        redirectTo:'/'
    })
}]);