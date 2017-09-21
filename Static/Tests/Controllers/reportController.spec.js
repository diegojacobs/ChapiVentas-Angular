describe('Reports Controller', function() {
    var $controller, ReportsController;
    var ReportRepository;
    var getReportData;

    // Load app module
    beforeEach(angular.mock.module('app'));
    
    beforeEach(inject(function ($q, _ReportRepository_) { //Mock our factory and spy on methods
        getReportData = $q.defer();
        ReportRepository = _ReportRepository_;
        spyOn(ReportRepository, 'getReportData').and.returnValue(getReportData.promise);
    }));

    // Inject the $controller service to create instances of the controller (ReportsController) we want to test
    beforeEach(inject(function($rootScope, _$controller_, _uiGridConstants_) {
      $controller = _$controller_;
      var scope = $rootScope.$new();

      ReportsController = $controller('ReportsController', {
        $scope: scope,
        $rootScope: $rootScope,
        uiGridConstants: _uiGridConstants_,
        ReportRepository: ReportRepository
      });
    }));
  
    // Verify our controller exists
    it('should be defined', function() {
      expect(ReportsController).toBeDefined();
    });

    
    it('initial values should be defined', function() {
        ReportsController.$onInit();
        expect(ReportsController.exportColumnType).toBeDefined();
        expect(ReportsController.exportRowType).toBeDefined();
        expect(ReportsController.gridOptions).toBeDefined();
    });

    it('call endpoint', function() {
        ReportsController.$onInit();
        expect(ReportRepository.getReportData).toHaveBeenCalled();
    });
});