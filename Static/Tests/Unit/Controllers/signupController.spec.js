describe('Signup Controller', function() {
    var $controller, SignupController;

    // Load app module
    beforeEach(angular.mock.module('app'));

    // Inject the $controller service to create instances of the controller (SignupController) we want to test
    beforeEach(inject(function($rootScope, _$controller_, _mockState_) {
      $controller = _$controller_;
      var scope = $rootScope.$new();
      var state = _mockState_;

      SignupController = $controller('SignUpController', {
        $scope: scope,
        $rootScope: $rootScope,
        $state: state,
        $cookies: {}
      });
    }));
  
    // Verify our controller exists
    it('should be defined', function() {
      expect(SignupController).toBeDefined();
    });

    it('initial values should be defined', function() {
        SignupController.$onInit();
        expect(SignupController.username).toBe(undefined);
        expect(SignupController.password).toBe(undefined);
        expect(SignupController.firstName).toBe(undefined);
        expect(SignupController.lastName).toBe(undefined);
        expect(SignupController.terms).toBe(false);
        expect(SignupController.validateSignUp).toBeDefined();
    });
});