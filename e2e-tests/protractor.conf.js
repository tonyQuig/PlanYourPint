//jshint strict: false
exports.config = {

    allScriptsTimeout: 11000,

    specs: [
    '*.js'
  ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8000/',

    framework: 'jasmine',

    chromeOnly: 'true',
    directConnect: 'true',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

};