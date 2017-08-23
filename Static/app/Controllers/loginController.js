(function() {
    'use strict';

    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = [];

    function loginController() {
        var vm = this;

        vm.$onInit = onInit;

        function onInit() {
            vm.signIn = {
                Username: '',
                Password: ''
            };
        }
    }

})();