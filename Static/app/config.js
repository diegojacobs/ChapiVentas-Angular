(function() {
    "use strict";

    angular
        .module("app")
        .config(config)
        .run(uiGrid);

    config.$inject = [
        '$stateProvider',
        '$locationProvider',
        '$urlRouterProvider'
    ];

    function config($stateProvider, $locationProvider, $urlRouterProvider) {
        var home = {
            name: 'home',
            url: '/',
            templateUrl: '/Views/home.html',
            controller: 'HomeController',
            controllerAs: 'vmHome'
        };

        var report = {
            name: 'report',
            url: '/report',
            templateUrl: '/Views/report.html',
            controller: 'ReportsController',
            controllerAs: 'vmReport'
        };

        var calendar = {
            name: 'calendar',
            url: '/calendar',
            templateUrl: '/Views/calendar.html',
            controller: 'calendarController',
            controllerAs: 'calendarCtrl'
        };

        $stateProvider.state(calendar);

        var signin = {
            name: 'signin',
            url: '/SignIn',
            templateUrl: '/Views/login.html',
            controller: 'LoginController',
            controllerAs: 'vmLogin'
        };

        $stateProvider.state(home);
        $stateProvider.state(report);
        $stateProvider.state(signin);

        $urlRouterProvider.otherwise('/SignIn');
        // $locationProvider.html5Mode(true);
    }

    uiGrid.$inject = [
        "$templateCache"
    ];

    function uiGrid($templateCache) {
        $templateCache.put('ui-grid/uiGridHeaderCell',
                    "<div role=\"columnheader\" ng-class=\"{ 'sortable': sortable }\" ui-grid-one-bind-aria-labelledby-grid=\"col.uid + '-header-text ' + col.uid + '-sortdir-text'\" aria-sort=\"{{col.sort.direction == asc ? 'ascending' : ( col.sort.direction == desc ? 'descending' : (!col.sort.direction ? 'none' : 'other'))}}\"><div role=\"button\" tabindex=\"0\" class=\"ui-grid-cell-contents ui-grid-header-cell-primary-focus\" col-index=\"renderIndex\" title=\"TOOLTIP\"><span class=\"ui-grid-header-cell-label\" ui-grid-one-bind-id-grid=\"col.uid + '-header-text'\" uib-tooltip=\"{{col.displayName}}\" enable-truncate-tooltip  tooltip-enable=\"false\"  tooltip-append-to-body=\"true\">{{ col.displayName CUSTOM_FILTERS }}</span> <span ui-grid-one-bind-id-grid=\"col.uid + '-sortdir-text'\" ui-grid-visible=\"col.sort.direction\" aria-label=\"{{getSortDirectionAriaLabel()}}\"><i ng-class=\"{ 'ui-grid-icon-up-dir': col.sort.direction == asc, 'ui-grid-icon-down-dir': col.sort.direction == desc, 'ui-grid-icon-blank': !col.sort.direction }\" title=\"{{isSortPriorityVisible() ? i18n.headerCell.priority + ' ' + ( col.sort.priority + 1 )  : null}}\" aria-hidden=\"true\"></i> <sub ui-grid-visible=\"isSortPriorityVisible()\" class=\"ui-grid-sort-priority-number\">{{col.sort.priority + 1}}</sub></span></div><div role=\"button\" tabindex=\"0\" ui-grid-one-bind-id-grid=\"col.uid + '-menu-button'\" class=\"ui-grid-column-menu-button\" ng-if=\"grid.options.enableColumnMenus && !col.isRowHeader  && col.colDef.enableColumnMenu !== false\" ng-click=\"toggleMenu($event)\" ng-class=\"{'ui-grid-column-menu-button-last-col': isLastCol}\" ui-grid-one-bind-aria-label=\"i18n.headerCell.aria.columnMenuButtonLabel\" aria-haspopup=\"true\"><i class=\"ui-grid-icon-angle-down\" aria-hidden=\"true\">&nbsp;</i></div><div ui-grid-filter></div></div>"
                );


        $templateCache.put('ui-grid/ui-grid-menu-button',
            "<div class=\"ui-grid-menu-button btn btn-small\"><div role=\"button\" ui-grid-one-bind-id-grid=\"'grid-menu'\" class=\"ui-grid-icon-container \" ng-click=\"toggleMenu()\" aria-haspopup=\"true\"><i class=\"ui-grid-icon-menu\" ui-grid-one-bind-aria-label=\"i18n.aria.buttonLabel\">&nbsp;</i></div><div ui-grid-menu menu-items=\"menuItems\"></div></div>"
        );
        $templateCache.put('ui-grid/uiGridMenuItem',
            "<button type=\"button\" class=\"ui-grid-menu-item btn btn-block text-left \" ng-click=\"itemAction($event, title)\" ng-show=\"itemShown()\" ng-class=\"{ 'ui-grid-menu-item-active': active(), 'ui-grid-sr-only': (!focus && screenReaderOnly) }\" aria-pressed=\"{{active()}}\" tabindex=\"0\" ng-focus=\"focus=true\" ng-blur=\"focus=false\"><i ng-class=\"icon\" aria-hidden=\"true\">&nbsp;</i> {{ name }}</button>"
        );
        $templateCache.put('ui-grid/ui-grid-filter',
            "<div class=\"ui-grid-filter-container\" ng-repeat=\"colFilter in col.filters\" ng-class=\"{'ui-grid-filter-cancel-button-hidden' : colFilter.disableCancelFilterButton === true }\"><div ng-if=\"colFilter.type !== 'select'\"><input type=\"text\" class=\"!!! form-control input-sm ui-grid-filter-input-{{$index}}\" ng-model=\"colFilter.term\" ng-attr-placeholder=\"{{colFilter.placeholder || ''}}\" aria-label=\"{{colFilter.ariaLabel || aria.defaultFilterLabel}}\"><div role=\"button\" class=\"ui-grid-filter-button\" ng-click=\"removeFilter(colFilter, $index)\" ng-if=\"!colFilter.disableCancelFilterButton\" ng-disabled=\"colFilter.term === undefined || colFilter.term === null || colFilter.term === ''\" ng-show=\"colFilter.term !== undefined && colFilter.term !== null && colFilter.term !== ''\"><i class=\"ui-grid-icon-cancel\" ui-grid-one-bind-aria-label=\"aria.removeFilter\">&nbsp;</i></div></div><div ng-if=\"colFilter.type === 'select'\"><select class=\"ui-grid-filter-select ui-grid-filter-input-{{$index}}\" ng-model=\"colFilter.term\" ng-attr-placeholder=\"{{colFilter.placeholder || aria.defaultFilterLabel}}\" aria-label=\"{{colFilter.ariaLabel || ''}}\" ng-options=\"option.value as option.label for option in colFilter.selectOptions\"><option value=\"\"></option></select><div role=\"button\" class=\"ui-grid-filter-button-select\" ng-click=\"removeFilter(colFilter, $index)\" ng-if=\"!colFilter.disableCancelFilterButton\" ng-disabled=\"colFilter.term === undefined || colFilter.term === null || colFilter.term === ''\" ng-show=\"colFilter.term !== undefined && colFilter.term != null\"><i class=\"ui-grid-icon-cancel\" ui-grid-one-bind-aria-label=\"aria.removeFilter\">&nbsp;</i></div></div></div>"
        );
        $templateCache.put('ui-grid/uiGridMenu',
            "<div class=\"ui-grid-menu\" ng-if=\"shown\"><style ui-grid-style>{{dynamicStyles}}</style><div class=\"ui-grid-menu-mid\" ng-show=\"shownMid\"><div class=\"ui-grid-menu-inner\"><ul role=\"menu\" class=\"ui-grid-menu-items\"><li ng-repeat=\"item in menuItems\" role=\"menuitem\" ui-grid-menu-item ui-grid-one-bind-id=\"'menuitem-'+$index\" action=\"item.action\" name=\"item.title\" active=\"item.active\" icon=\"item.icon\" shown=\"item.shown\" context=\"item.context\" template-url=\"item.templateUrl\" leave-open=\"item.leaveOpen\" screen-reader-only=\"item.screenReaderOnly\"></li></ul></div></div></div>"
        );
        $templateCache.put('ui-grid/uiGridMenuItem',
            "<button type=\"button\" class=\"ui-grid-menu-item btn btn-block text-left \" ng-click=\"itemAction($event, title)\" ng-show=\"itemShown()\" ng-class=\"{ 'ui-grid-menu-item-active': active(), 'ui-grid-sr-only': (!focus && screenReaderOnly) }\" aria-pressed=\"{{active()}}\" tabindex=\"0\" ng-focus=\"focus=true\" ng-blur=\"focus=false\"><i ng-class=\"icon\" aria-hidden=\"true\">&nbsp;</i> {{ name }}</button>"
        );
        $templateCache.put('ui-grid/pagination',
            // keep the paging bar even if we set items per page greater than the current number of items
            //'<div class="ui-grid-pager-panel" ui-grid-pager ng-show="grid.options.enablePaginationControls && grid.options.paginationPageSize < grid.options.totalItems">' +
            '<div class="ui-grid-pager-panel" ui-grid-pager ng-show="grid.options.enablePaginationControls && grid.options.totalItems && grid.options.totalItems>25 ">' +
            '<div class="ui-grid-pager-container">' +
            '<div class="ui-grid-pager-control">' +
            '<ul uib-pagination class="pagination-sm" total-items="grid.options.totalItems" items-per-page="grid.options.paginationPageSize" ng-model="grid.options.paginationCurrentPage" boundary-links="grid.options.paginationBoundryLinks" max-size="5"></ul>' +
            '</div>' +
            '<div class="ui-grid-pager-row-count-picker">' +
            '<select ng-model="grid.options.paginationPageSize" ng-options="o as o for o in grid.options.paginationPageSizes"></select>' +
            '<span class="ui-grid-pager-row-count-label">&nbsp;{{sizesLabel}}</span>' +
            '</div>' +
            '</div>' +
            '<div class="ui-grid-pager-count-container">' +
            '<div class="ui-grid-pager-count">' +
            '<span ng-show="grid.options.totalItems > 0">' +
            '{{ 1 + paginationApi.getFirstRowIndex() }} <abbr ui-grid-one-bind-title=\"paginationThrough\">-</abbr> {{ paginationApi.getLastRowIndex() }} {{paginationOf}} {{grid.options.totalItems}} {{totalItemsLabel}}' +
            '</span>' +
            '</div>' +
            '</div>' +
            '</div>'
        );
    }
})();