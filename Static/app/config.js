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
        }
        $stateProvider.state(home);

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5mode(true);
    }
})();