(function() {
    'use strict';

    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = [
        '$scope',
        '$rootScope'
    ];

    function loginController($scope, $rootScope) {
        var vm = this;

        vm.$onInit = onInit;

        function onInit() {

        }
    }

})();