(function (){
    "use strict";

    angular
        .module("app")
        .config(config);

    config.$inject = [
        '$stateProvider',
        '$locationProvider', 
        '$urlRouterProvider'
    ];

    function config($stateProvider, $locationProvider, $urlRouterProvider){
        var home = {
            name: 'home',
            url: '/',
            template: '/Static/Views/home.html',
            controller: 'homeController',
            controllerAs: 'vmHome'
        };

        var report = {
            name: 'report',
            url: '/report',
            template: '/Static/Views/report.html',
            controller: 'reportsController',
            controllerAs: 'vmReport'
        };

        $stateProvider.state(home);
        $stateProvider.state(report);

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5mode(true);
    }
})();