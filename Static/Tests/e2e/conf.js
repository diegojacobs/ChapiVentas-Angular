// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
      //Controllers Specs
      'controllers/loginController.spec.js'
    ],
    capabilities: {
      browserName: 'firefox'
    }
  }