/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',

      '@progress/kendo-angular-intl': 'npm:@progress/kendo-angular-intl/dist/npm',
      '@telerik/kendo-intl': 'npm:@telerik/kendo-intl/dist/npm',
      '@telerik/kendo-draggable': 'npm:@telerik/kendo-draggable/dist/npm',
      '@telerik/kendo-inputs-common': 'npm:@telerik/kendo-inputs-common/dist/npm',
      '@progress/kendo-angular-inputs': 'npm:@progress/kendo-angular-inputs/dist/npm',

      'marked': 'npm:marked/lib',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      '@progress/kendo-angular-intl': {
        main: './main.js',
        defaultExtension: 'js'
      },
      '@telerik/kendo-intl': {
        main: './main.js',
        defaultExtension: 'js'
      },
      '@telerik/kendo-draggable': {
        main: './main.js',
        defaultExtension: 'js'
      },
      '@telerik/kendo-inputs-common': {
        main: './main.js',
        defaultExtension: 'js'
      },
      '@progress/kendo-angular-inputs': {
        main: './main.js',
        defaultExtension: 'js'
      },
      'marked': { main: 'marked.js', defaultExtension: 'js' }
    }
  });
})(this);
