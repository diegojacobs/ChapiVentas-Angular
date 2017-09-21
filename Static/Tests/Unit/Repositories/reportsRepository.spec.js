describe('Reports Factory', function() {
    var Reports;
    var reportsList = [
        {
            id: '1',
            name: 'Jane',
            role: 'Designer',
            location: 'New York',
            twitter: 'gijane'
        },
        {
            id: '2',
            name: 'Bob',
            role: 'Developer',
            location: 'New York',
            twitter: 'billybob'
        },
        {
            id: '3',
            name: 'Jim',
            role: 'Developer',
            location: 'Chicago',
            twitter: 'jimbo'
        },
        {
            id: '4',
            name: 'Bill',
            role: 'Designer',
            location: 'LA',
            twitter: 'dabill'
        }
    ];
    
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
    describe('getReportData Method', function() {
        // A simple test to verify the method all exists
        it('should exist', function() {
            expect(Reports.getReportData).toBeDefined();
        });

        // A test to verify that calling getReportData() returns the array of reports we hard-coded above
        it('should return a hard-coded list of reports', function() {
            expect(Reports.getReportData()).toEqual(reportsList);
        });
    });
});