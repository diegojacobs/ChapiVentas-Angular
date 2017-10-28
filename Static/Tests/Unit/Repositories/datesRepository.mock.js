(function() {
    'use strict';

    angular
        .module('app')
        .factory('DatesRepository', datesRepository);

    datesRepository.$inject = [];

    function datesRepository() {
        var service = {
            obtainImportantDates: obtainImportantDates,
            obtainPromos: obtainPromos
        };
        
        var importantDatesList = [];
        var promosList = [];

        return service;

        
        ////////////////
        function obtainImportantDates() {
            return importantDatesList;
        }
        function obtainPromos(){
            return promosList;
        }
    }
})();