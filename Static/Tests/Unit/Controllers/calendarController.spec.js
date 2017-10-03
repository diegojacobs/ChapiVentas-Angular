describe('Calendar Controller', function() {
    var $controller, CalendarController;
    var ProductsRepository;
    var obtainPromos;
    var obtainImportantDates;

    // Load app module
    beforeEach(angular.mock.module('app'));
    
    beforeEach(inject(function ($q, _ProductsRepository_) { //Mock our factory and spy on methods
        obtainPromos = $q.defer();
        ProductsRepository = _ProductsRepository_;
        spyOn(ProductsRepository, 'obtainPromos').and.returnValue(obtainPromos.promise);
    }));

    // Inject the $controller service to create instances of the controller (CalendarController) we want to test
    beforeEach(inject(function($rootScope, _$controller_) {
      $controller = _$controller_;
      var scope = $rootScope.$new();

      CalendarController = $controller('CalendarController', {
        $scope: scope,
        $rootScope: $rootScope,
        ProductsRepository: ProductsRepository
      });
    }));
  
    // Verify our controller exists
    it('should be defined', function() {
      expect(CalendarController).toBeDefined();
    });

    
    it('initial values should be defined', function() {
        CalendarController.$onInit();
        expect(CalendarController.calendarView).toBeDefined();
        expect(CalendarController.viewDate).toBeDefined();
        expect(CalendarController.eventClicked).toBeDefined();
        expect(CalendarController.events).toBeDefined();
        expect(CalendarController.cellIsOpen).toBeDefined();
        expect(CalendarController.addEvent).toBeDefined();
        expect(CalendarController.toggle).toBeDefined();
        expect(CalendarController.saveEvent).toBeDefined();
        expect(CalendarController.deleteEvent).toBeDefined();
        expect(CalendarController.products).toBeDefined();
    });

    it('call endpoint', function() {
        expect(ProductsRepository.obtainPromos).toHaveBeenCalled();
    });
});