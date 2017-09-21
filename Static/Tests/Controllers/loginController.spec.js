describe('Login Controller', function() {
    var $controller, LoginController;

    // Load app module
    beforeEach(angular.mock.module('app'));

    // Inject the $controller service to create instances of the controller (LoginController) we want to test
    beforeEach(inject(function($rootScope, _$controller_, _mockState_) {
      $controller = _$controller_;
      var scope = $rootScope.$new();
      var state = _mockState_;

      LoginController = $controller('LoginController', {
        $scope: scope,
        $rootScope: $rootScope,
        $state: state
      });
    }));
  
    // Verify our controller exists
    it('should be defined', function() {
      expect(LoginController).toBeDefined();
    });

    it('initial values should be defined', function() {
        LoginController.$onInit();
        expect(LoginController.username).toBe(undefined);
        expect(LoginController.password).toBe(undefined);
        expect(LoginController.validateLogin).toBeDefined();
    });
});