(function() {
    'use strict';

    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['$scope', '$state'];

    function loginController($scope, $state) {
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
                $state.go("home");
            }
        }
    }
})();