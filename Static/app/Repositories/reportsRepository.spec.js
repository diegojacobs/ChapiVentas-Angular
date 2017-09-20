describe('Reports Factory', function() {
    var Reports;
    
    // Before each test load our app module
    beforeEach(angular.mock.module('app'));

    // Before each test set our injected Reports factory (_ReportRepository_) to our local Reports variable
    beforeEach(inject(function(_ReportRepository_) {
        Reports = _ReportRepository_;
    }));

    // A simple test to verify the Reports factory exists
    it('should exist', function() {
        expect(Reports).toBeDefined();
    });

    // A set of tests for our Reports.getReportData() method
    describe('.getReportData()', function() {
      // A simple test to verify the method all exists
      it('should exist', function() {
        expect(Reports.getReportData).toBeDefined();
      });
    });
});