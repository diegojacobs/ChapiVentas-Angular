(function() {
    'use strict';

    angular
        .module('app')
        .controller('reportsController', reportsController);

    reportsController.$inject = [
        "$scope",
        "$rootScope",
        'uiGridConstants'
    ];

    function reportsController($scope, $rootScope, uiGridConstants) {
        var vm = this;

        vm.$onInit = onInit;

        function onInit() {
            //Models
            vm.export_column_type = "all";
            vm.export_row_type = "all";
            vm.gridData = [{
                    'Id': 0,
                    'fecha': '2017 / 8 / 21',
                    'producto': 'Doritos Verdes',
                    'cantidad': 10,
                    'promocion': '2x1',
                    'totalVenta': 50.00
                },
                {
                    'Id': 1,
                    'fecha': '2017 / 8 / 21',
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

            vm.gridOptions = {
                rowHeight: 44,
                enableColumnMenus: false,
                paginationPageSizes: [10, 25, 50],
                paginationPageSize: 10,
                paginationCurrentPage: 1,
                enableHorizontalScrollbar: 1,
                enableFiltering: false,
                columnDefs: columnDefs,
                onRegisterApi: onRegisterApi,

                //Export
                exporterLinkLabel: 'get your csv here',
                exporterPdfDefaultStyle: { fontSize: 9 },
                exporterPdfTableStyle: { margin: [30, 30, 30, 30] },
                exporterPdfTableHeaderStyle: { fontSize: 10, bold: true, italics: true, color: 'red' },
                exporterPdfOrientation: 'portrait',
                exporterPdfPageSize: 'LETTER',
                exporterPdfMaxGridWidth: 500
            };

            vm.gridOptions.data = vm.gridData;

            //Functions
            vm.toggleFiltering = toggleFiltering;
            vm.exportPdf = exportGridPdf;
            vm.exportCsv = exportGridCsv;
            vm.loadDataToGrid = loadDataToGrid;
        }

        function onRegisterApi(gridApi) {
            vm.gridApi = gridApi;
        }

        function columnDefs() {
            return [{
                    name: 'Date',
                    field: 'fecha'
                },
                {
                    name: 'Product',
                    field: 'Product'
                },
                {
                    name: 'Quantity',
                    field: 'Quantity'
                },
                {
                    name: 'Promotion',
                    field: 'Promotion'
                },
                {
                    name: 'Amount',
                    field: 'Sell Amount'
                }
            ];
        }

        function toggleFiltering() {
            vm.gridOptions.enableFiltering = !vm.gridOptions.enableFiltering;
            vm.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
        }

        function loadDataToGrid() {
            vm.gridOptions.data = vm.gridData;
        }

        function exportGridPdf() {
            vm.gridApi.exporter.pdfExport(vm.export_row_type, vm.export_column_type);
        }

        function exportGridCsv() {
            var myElement = angular.element(document.querySelectorAll(".custom-csv-link-location"));
            vm.gridApi.exporter.csvExport(vm.export_row_type, vm.export_column_type, myElement);
        }
    }
})();