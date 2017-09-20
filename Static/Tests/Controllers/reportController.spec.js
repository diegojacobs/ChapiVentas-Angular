describe('Reports Controller', function() {
    var $controller, ReportsController;
  
    // Load app module
    beforeEach(angular.mock.module('app'));
  
    // Inject the $controller service to create instances of the controller (ReportsController) we want to test
    beforeEach(inject(function($rootScope, _$controller_, _uiGridConstants_) {
      $controller = _$controller_;
      var scope = $rootScope.$new();

      ReportsController = $controller('ReportsController', {
        $scope: scope,
        $rootScope: $rootScope,
        uiGridConstants: _uiGridConstants_,
        ReportRepository: {}
      });
    }));
  
    // Verify our controller exists
    it('should be defined', function() {
      expect(ReportsController).toBeDefined();
    });
  });