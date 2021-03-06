(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', loginController);

    loginController.$inject = [
        '$scope', 
        '$rootScope', 
        '$state',
        '$cookies'
    ];

    function loginController($scope, $rootScope, $state, $cookies) {
        var vm = this;

        vm.$onInit = onInit;

        ////////////////

        function onInit() {
            //Models
            vm.username = undefined;
            vm.password = undefined;

            //Functions
            vm.validateLogin = validateLogin;
        }

        function validateLogin(){
            if(vm.username && vm.password){
                $cookies.put('ChapiVentas-Login', true);
                $rootScope.$broadcast('isLogged', { any: true });
                $state.go('home');
            }
        }
    }
})();