(function() {
    'use strict';

    angular
        .module('app')
        .factory('uiGridConstants', uiGridConstants);

    uiGridConstants.$inject = [];

    function uiGridConstants() {
        var service = {
            dataChange: {
                COLUMN: ""
            }
        };
        
        return service;
    }
})();