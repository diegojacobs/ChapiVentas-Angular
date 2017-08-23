(function() {
    'use strict';

    angular
        .module('app')
        .controller('reportsController', reportsController);

    reportsController.$inject = [
        "$scope",
        "$rootScope"
    ];

    function reportsController($scope, $rootScope) {
        var vm = this;

        vm.$onInit = onInit;

        function onInit() {
            //Models
            vm.gridData = [{
                    'Id': 0,
                    'fecha': '2017 / 8 / 21',
                    'producto': 'Doritos Verdes',
                    'cantidad': 10,
                    'promoción': '2x1',
                    'totalVenta': 50.00
                },
                {
                    'Id': 1,
                    'fecha': '2017 / 8 / 21',
                    'producto': 'Doritos Rojos',
                    'cantidad': 50,
                    'promoción': '2x1',
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

            vm.gridOptions = {
                data: vm.gridData,
                paginationPageSizes: [10, 25, 50],
                paginationPageSize: 10,
                enableColumnResizing: true,
                enableFiltering: false,
                columnDefs: columnDefs,
                onRegisterApi: onRegisterApi
            };

            //Functions
            vm.toggleFiltering = toggleFiltering;
        }

        function onRegisterApi(gridApi) {
            gridApi = gridApi;
        }

        function columnDefs() {
            return [
                { name: 'Date' },
                { name: 'Product' },
                { name: 'Quantity' },
                { name: 'Promotion' },
                { name: 'Sell Amount' }
            ];
        }



        function toggleFiltering() {
            $scope.gridOptions.enableFiltering = !$scope.gridOptions.enableFiltering;
            $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
        }
    }
})();