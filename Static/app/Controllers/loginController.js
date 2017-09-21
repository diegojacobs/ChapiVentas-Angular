(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', loginController);

    loginController.$inject = [
        '$scope', 
        '$rootScope', 
        '$state'
    ];

    function loginController($scope, $rootScope, $state) {
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
                $state.go('home');
            }
        }
    }
})();