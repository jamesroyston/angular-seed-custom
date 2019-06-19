const puppeteer = require('puppeteer');
process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = function (config) {
  config.set({

    basePath: './app',

    files: [
      'lib/angular/angular.js',
      'lib/angular-route/angular-route.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      'core/**/*.js',
      'view*/**/*.js'
    ],

    autoWatch: false,

    colors: true,

    port: 9876,

    frameworks: ['mocha', 'chai', 'sinon', 'sinon-chai'],

    // chai/mocha config
    client: {
      chai: {
        includeStack: true
      },
      mocha: {
        // change Karma's debug.html to the mocha web reporter
        reporter: 'html',
      }
    },

    browsers: [
      'ChromeHeadless', 
      // 'PhantomJS'
    ],

    plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-mocha-reporter',
      'karma-mocha',
      'karma-sinon-chai',
      'karma-chai',
      'karma-sinon'
    ],

    logLevel: config.LOG_INFO,

    singleRun: true,

    reporters: ['mocha'],

    // optional reporter settings...

    // mochaReporter: {
    //   colors: {
    //     success: 'blue',
    //     info: 'bgGreen',
    //     warning: 'cyan',
    //     error: 'bgRed'
    //   },
    //   symbols: {
    //     success: '+',
    //     info: '#',
    //     warning: '!',
    //     error: 'x'
    //   }
    // }

  });
};
