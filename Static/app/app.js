(function() {
    'use strict';

    angular.module("app", [
        'ngTouch',
        'ngSanitize',

        //UI Grid
        'ui.grid',
        'ui.grid.pagination',
        'ui.grid.autoResize',
        'ui.grid.exporter',

        'ui.router',
        'ui.bootstrap'
    ]);

})();