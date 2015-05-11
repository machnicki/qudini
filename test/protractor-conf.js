exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        'e2e/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    chromeOnly: true,

    baseUrl: 'http://127.0.0.1:1337/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};