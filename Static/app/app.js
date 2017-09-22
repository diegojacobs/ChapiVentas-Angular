(function() {
    'use strict';

    angular.module("app", [
        'ngTouch',
        'ngSanitize',
        'ngCookies',
        'ngAnimate',

        //UI Grid
        'ui.grid',
        'ui.grid.pagination',
        'ui.grid.autoResize',
        'ui.grid.exporter',

        'ui.router',
        'ui.bootstrap',
        'nvd3',

        'mwl.calendar',
        'colorpicker.module'
    ]);

})();