// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-edge-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-sonarqube-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      type : 'html',
      dir : 'coverage/',
      reporters: [
        { type: 'lcov', subdir: '.' }
      ]
    },
    sonarqubeReporter: {
      basePath: 'src',     
      filePattern: '**/*spec.ts', 
      encoding: 'utf-8',        
      outputFolder: './coverage', 
      reportName: 'junit-test.xml'
    },
    reporters: ['progress', 'kjhtml', 'sonarqube', 'coverage'],
    // preprocessors: {
    //   'src/**/*.js': ['coverage']
    // },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
