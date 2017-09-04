(function() {
    "use strict";

    angular
        .module("app")
        .config(config);

    config.$inject = [
        '$stateProvider',
        '$locationProvider',
        '$urlRouterProvider'
    ];

    function config($stateProvider, $locationProvider, $urlRouterProvider) {
        var home = {
            name: 'home',
            url: '/',
            templateUrl: '/Views/home.html',
            controller: 'homeController',
            controllerAs: 'vmHome'
        };

        var report = {
            name: 'report',
            url: '/report',
            templateUrl: '/Views/report.html',
            controller: 'reportsController',
            controllerAs: 'vmReport'
        };

        var signin = {
            name: 'signin',
            url: '/SignIn',
            templateUrl: '/Views/login.html',
            controller: 'loginController',
            controllerAs: 'vmLogin'
        };

        $stateProvider.state(home);
        $stateProvider.state(report);
        $stateProvider.state(signin);

        $urlRouterProvider.otherwise('/SignIn');
        // $locationProvider.html5Mode(true);
    }
})();