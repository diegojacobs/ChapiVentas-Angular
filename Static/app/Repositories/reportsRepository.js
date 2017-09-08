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
                url: "http://13.58.81.154/api/carrera"
            }).then(function (response) {
                //return response.data;
                return [{
                        'Id': 0,
                        'fecha': '2017/8/21',
                        'producto': 'Doritos Verdes',
                        'cantidad': 10,
                        'promocion': '2x1',
                        'totalVenta': 50.00
                    },
                    {
                        'Id': 1,
                        'fecha': '2017/8/21',
                        'producto': 'Doritos Rojos',
                        'cantidad': 50,
                        'promocion': '2x1',
                        'totalVenta': 250.00
                    },
                    {
                        'Id': 2,
                        'fecha': '2017/8/21',
                        'producto': 'Doritos Azules',
                        'cantidad': 20,
                        'promocion': '2x1',
                        'totalVenta': 100.00
                    }
                ];
            }).catch(function (response) {
                //return $q.reject(response.data);
                return [{
                    'Id': 0,
                    'fecha': '2017/8/21',
                    'producto': 'Doritos Verdes',
                    'cantidad': 10,
                    'promocion': '2x1',
                    'totalVenta': 50.00
                },
                {
                    'Id': 1,
                    'fecha': '2017/8/21',
                    'producto': 'Doritos Rojos',
                    'cantidad': 50,
                    'promocion': '2x1',
                    'totalVenta': 250.00
                },
                {
                    'Id': 2,
                    'fecha': '2017 / 8 / 21',
                    'producto': 'Doritos Azules',
                    'cantidad': 20,
                    'promocion': '2x1',
                    'totalVenta': 100.00
                }
            ];
            });
        }
    }
})();