// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 120000,
    getPageTimeout: 120000,
    jasmineNodeOpts: {
      defaultTimeoutInterval: 120000,
    },
    specs: [
      //Controllers Specs
      'controllers/loginController.spec.js',
      'controllers/signupController.spec.js',
      'controllers/homeController.spec.js'
    ],
    capabilities: {
      browserName: 'firefox',
      acceptSslCerts: true,
      shardTestFiles: false,
      maxInstances: 1
    },
    directConnect: false
  };