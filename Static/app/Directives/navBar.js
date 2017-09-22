(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('app')
        .component('navBar', {
            templateUrl: '/Views/nav-bar.html',
            controller: navBarController,
            controllerAs: 'vmNavBar',
            bindings: {
                Binding: '=',
            },
        });

    navBarController.$inject = [
        '$scope',
        '$rootScope',
        '$state',
        '$cookies'
    ];

    function navBarController($scope, $rootScope, $state, $cookies) {
        var vm = this;

        $rootScope.$on('isLogged', function(event, args) {   
            vm.isLogged = args.any;
        });

        ////////////////

        vm.$onInit = onInit;
        
        function onInit() {
            //values
            vm.isLogged = $cookies.get('ChapiVentas-Login');

            //Functions
            vm.logout = logout;
            
        };

        function logout(){
            $cookies.remove('ChapiVentas-Login');
            $rootScope.$broadcast('isLogged', { any: false });
            $state.go('signin')
        }
    }
})();