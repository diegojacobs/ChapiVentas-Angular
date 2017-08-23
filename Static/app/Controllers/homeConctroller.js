(function() {
    'use strict';

    angular
        .module('app')
        .controller('homeController', homeController);

    homeController.$inject = [
        '$scope'
    ];

    function homeController($scope) {
        var vm = this;

        vm.$onInit = onInit;

        function onInit() {
            vm.options = {
                chart: {
                    type: 'pieChart',
                    height: 500,
                    x: function(d) { return d.key; },
                    y: function(d) { return d.y; },
                    showLabels: true,
                    duration: 500,
                    labelThreshold: 0.01,
                    labelSunbeamLayout: true,
                    legend: {
                        margin: {
                            top: 5,
                            right: 35,
                            bottom: 5,
                            left: 0
                        }
                    }
                }
            };

            vm.data = [{
                    key: "Ingenieria Industria",
                    y: 5
                },
                {
                    key: "Psicologia",
                    y: 2
                },
                {
                    key: "Ingenieria Mecanica",
                    y: 9
                },
                {
                    key: "Antropologia",
                    y: 7
                },
                {
                    key: "Ingenieria Quimica",
                    y: 4
                },
                {
                    key: "Biologia",
                    y: 3
                },
                {
                    key: "Educación",
                    y: .5
                }
            ];
        }
    }
})();