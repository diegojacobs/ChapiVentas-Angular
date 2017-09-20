(function() {
    'use strict';

    angular
        .module('app')
        .factory('ReportRepository', reportRepository);

    reportRepository.$inject = [];

    function reportRepository() {
        var service = {
            getReportData: getReportData
        };
        
        var reportsList = [
            {
                id: '1',
                name: 'Jane',
                role: 'Designer',
                location: 'New York',
                twitter: 'gijane'
            },
            {
                id: '2',
                name: 'Bob',
                role: 'Developer',
                location: 'New York',
                twitter: 'billybob'
            },
            {
                id: '3',
                name: 'Jim',
                role: 'Developer',
                location: 'Chicago',
                twitter: 'jimbo'
            },
            {
                id: '4',
                name: 'Bill',
                role: 'Designer',
                location: 'LA',
                twitter: 'dabill'
            }
        ];

        return service;

        
        ////////////////
        function getReportData() {
            return reportsList;
        }
    }
})();