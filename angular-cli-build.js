/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'core-js/client/shim.min.js',
      'reflect-metadata/**/*.+(js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)'
    ],
    polyfills: [
      'vendor/core-js/client/shim.min.js',
      'vendor/reflect-metadata/Reflect.js',
      'vendor/systemjs/dist/system.js',
      'vendor/zone.js/dist/zone.min.js'
    ]
  });
};
