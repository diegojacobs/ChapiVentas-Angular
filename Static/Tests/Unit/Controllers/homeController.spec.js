describe('Home Controller', function() {
    var $controller, HomeController;

    // Load app module
    beforeEach(angular.mock.module('app'));

    // Inject the $controller service to create instances of the controller (HomeController) we want to test
    beforeEach(inject(function($rootScope, _$controller_) {
      $controller = _$controller_;
      var scope = $rootScope.$new();

      HomeController = $controller('HomeController', {
        $scope: scope,
        $rootScope: $rootScope
      });
    }));
  
    // Verify our controller exists
    it('should be defined', function() {
      expect(HomeController).toBeDefined();
    });

    
    it('initial values should be defined', function() {
        HomeController.$onInit();
        expect(HomeController.options).toBeDefined();
        expect(HomeController.data).toBeDefined();
    });
});