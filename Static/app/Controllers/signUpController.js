(function() {
    'use strict';

    angular
        .module('app')
        .controller('SignUpController', signUpController);

    signUpController.$inject = [
        '$scope', 
        '$rootScope', 
        '$state',
        '$cookies'
    ];

    function signUpController($scope, $rootScope, $state, $cookies) {
        var vm = this;

        vm.$onInit = onInit;

        ////////////////

        function onInit() {
            $rootScope.isLogged = false;
            //Models
            vm.firstName = undefined;
            vm.lastName = undefined;
            vm.username = undefined;
            vm.password = undefined;
            vm.terms = false;

            //Functions
            vm.validateSignUp = validateSignUp;
        }

        function validateSignUp(){
            if(vm.registrationForm.$valid){
                $cookies.put('ChapiVentas-Login', true);
                $rootScope.$broadcast('isLogged', { any: true });
                $state.go('home');
            }
        }
    }
})();