// Karma configuration
// Generated on Tue Sep 19 2017 22:14:58 GMT-0600 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './node_modules/angular/angular.js',                             // angular
      './node_modules/angular-mocks/angular-mocks.js',                 // loads our modules for tests
      //module
      './Static/Tests/app.spec.js', 

      //mocks 
      './Static/Tests/Libraries Mocks/uiGridConstants.mock.js',
      './Static/Tests/Libraries Mocks/state.mock.js',

      //Repositories
      './Static/Tests/Repositories/reportsRepository.mock.js',
      './Static/Tests/Repositories/reportsRepository.spec.js',

      //Controllers
      './Static/app/Controllers/reportController.js',
      './Static/Tests/Controllers/reportController.spec.js',
      './Static/app/Controllers/homeController.js',
      './Static/Tests/Controllers/homeController.spec.js',
      './Static/app/Controllers/loginController.js',
      './Static/Tests/Controllers/loginController.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
