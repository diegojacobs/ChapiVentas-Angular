(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('app')
        .component('navBar', {
            templateUrl: '/Static/Views/nav-bar.html',
            controller: navBarController,
            controllerAs: 'vmNavBar',
            bindings: {
                Binding: '=',
            },
        });

    navBarController.$inject = [];

    function navBarController() {
        var vm = this;


        ////////////////

        vm.$onInit = function() {};
        vm.$onChanges = function(changesObj) {};
        vm.$onDestroy = function() {};
    }
})();