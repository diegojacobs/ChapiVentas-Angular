(function() {
    'use strict';

    angular
        .module('app')
        .factory('ReportRepository', reportRepository);

    reportRepository.$inject = ['$http', '$q'];

    function reportRepository($http, $q) {
        var routes = {

        };

        var service = {
            getReportData: getReportData
        };
        
        return service;

        ////////////////
        function getReportData() {
            return $http({
                method: "GET",
                url: "http://13.58.81.154/api/ventas"
            }).then(function (response) {
                return response.data;       
            }).catch(function (response) {
                return $q.reject(response.data);
            });
        }
    }
})();