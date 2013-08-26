//basePath = '../';
//
//files = [
//  ANGULAR_SCENARIO,
//  ANGULAR_SCENARIO_ADAPTER,
//  'test/e2e/**/*.js'
//];
//
//autoWatch = false;
//
//browsers = ['Chrome'];
//
//singleRun = true;
//
//proxies = {
//  '/': 'http://localhost:8000/'
//};
//
//junitReporter = {
//  outputFile: 'test_out/e2e.xml',
//  suite: 'e2e'
//};



// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../',
//        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['ng-scenario'],

        // list of files / patterns to load in the browser
        files: [
            'test/e2e/**/*.js'
        ],

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8080,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
//        singleRun: false,
        singleRun: true,

        // Uncomment the following lines if you are using grunt's server to run the tests
        proxies: {
//           '/': 'http://localhost:9000/'
           '/': 'http://localhost:8000/'
        },
        // URL root prevent conflicts with the site root
        urlRoot: '_karma_',

        junitReporter: {
            outputFile: 'test_out/e2e.xml',
            suite: 'e2e'
        }
    });
};