(function() {
    'use strict';

    angular
        .module('app')
        .controller('reportsController', reportsController);

    reportsController.$inject = [
        "$scope",
        "$rootScope",
        'uiGridConstants',
        "ReportRepository"
    ];

    function reportsController($scope, $rootScope, uiGridConstants, reportRepository) {
        var vm = this;

        vm.$onInit = onInit;

        function onInit() {
            //Models
            vm.export_column_type = "all";
            vm.export_row_type = "all";

            reportRepository.getReportData()
                .then(function (response){
                    vm.gridOptions.data = response;
                })
                .catch(function (response){

                })
                .finally(function (response){

                });
            

            vm.gridOptions = {
                rowHeight: 44,
                enableColumnMenus: false,
                paginationPageSizes: [10, 25, 50],
                paginationPageSize: 10,
                paginationCurrentPage: 1,
                enableHorizontalScrollbar: 1,
                enableFiltering: false,
                columnDefs: columnDefs(),
                onRegisterApi: onRegisterApi,

                //Export
                exporterLinkLabel: 'get your csv here',
                exporterPdfDefaultStyle: { fontSize: 9 },
                exporterPdfTableStyle: { margin: [30, 30, 30, 30] },
                exporterPdfTableHeaderStyle: { fontSize: 10, bold: true, italics: false, color: 'black' },
                exporterPdfOrientation: 'portrait',
                exporterPdfPageSize: 'LETTER',
                exporterPdfMaxGridWidth: 500
            };

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
            return [
                {
                    name: 'Date',
                    field: 'fecha'
                },
                {
                    name: 'Product',
                    field: 'producto'
                },
                {
                    name: 'Quantity',
                    field: 'cantidad'
                },
                {
                    name: 'Promotion',
                    field: 'promocion'
                },
                {
                    name: 'Sell Amount',
                    field: 'totalVenta',
                    cellTemplate: '<div class="ui-grid-cell-contents">{{  }}</div>'
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