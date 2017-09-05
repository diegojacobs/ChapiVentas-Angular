(function() {
    'use strict';

    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['$scope'];

    function loginController($scope) {
        var vm = this;

        vm.$onInit = onInit;

        ////////////////

        function onInit() {}
    }
})();