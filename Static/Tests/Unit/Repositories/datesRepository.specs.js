describe('Dates Factory', function() {
    var Dates;
    var importantDatesList = [];
    var promosList = [];
    
    // Before each test load our app module
    beforeEach(angular.mock.module('app'));

    // Before each test set our injected Dates factory (_DatesRepository_) to our local Dates variable
    beforeEach(inject(function(_DatesRepository_) {
        Dates = _DatesRepository_;
    }));

    // A simple test to verify the Dates factory exists
    it('should exist', function() {
        expect(Dates).toBeDefined();
    });

    // A set of tests for our Dates.getReportData() method
    describe('obtainImportantDates Method', function() {
        // A simple test to verify the method all exists
        it('should exist', function() {
            expect(Dates.obtainImportantDates).toBeDefined();
        });

        // A test to verify that calling getReportData() returns the array of Dates we hard-coded above
        it('should return a hard-coded list of important Dates', function() {
            expect(Dates.obtainImportantDates()).toEqual(importantDatesList);
        });
    });
    // A set of tests for our Dates.getReportData() method
    describe('obtainPromos Method', function() {
        // A simple test to verify the method all exists
        it('should exist', function() {
            expect(Dates.obtainPromos).toBeDefined();
        });

        // A test to verify that calling getReportData() returns the array of Dates we hard-coded above
        it('should return a hard-coded list of promotions', function() {
            expect(Dates.obtainPromos()).toEqual(promosList);
        });
    });
});
