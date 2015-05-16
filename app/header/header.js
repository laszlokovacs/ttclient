var myApp=angular.module("TeachingTechniques",["ui.router"]);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        })
        .state('about', {
            url:'/about',
            templateUrl: 'templates/about.html',
            controller: 'AboutController'
        })

}]);