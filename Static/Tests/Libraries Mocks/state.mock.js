(function() {
    'use strict';

    angular
        .module('app')
        .factory('mockState', mockState);

        mockState.$inject = [];

    function mockState() {
        var service = {
            go: go
        };
        
        function go(){

        }
        
        return service;
    }
})();