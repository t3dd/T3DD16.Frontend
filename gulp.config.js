var config = {};
(function () {
  var env = 'development';
  var root = '';
  var src = root + 'src/';
  var app = root + 'dist/';
  var testHelper = root + 'test-helpers/';
  var assets = root + 'assets/';
  var assetsPath = {
    scss: assets + 'scss/',
    styles: app + 'assets/styles/',
    images: assets + 'images/',
    fonts: assets + 'fonts/'
  };
  var index = src + 'index.html';
  var tsFiles = [
    src + '**/!(*.spec)+(.ts)'
  ];
  var tsSpecFiles = [
    src + '**/*.spec.ts',
    testHelper + '**/*.ts'
  ];
  var build = {
    path: 'build/',
    app: 'build/app/',
    assetPath: 'build/assets/',
    assets: {
      lib: {
        js: 'lib.js',
        css: 'lib.css'
      }
    }
  };
  var report = {
    path: 'report/'
  };
  var buildPath = {
    lib: {
      css: build.assetPath + build.assets.lib.css,
      js: build.assetPath + build.assets.lib.js
    },
    fonts: build.path + 'fonts'
  };

  var systemjsBuild = {
    baseURL: app,
    defaultJSExtensions: true,
    map: {
      'typescript': 'node_modules/typescript/lib/typescript.js',
      'angular2': 'node_modules/angular2',
      'angular2-universal-preview': 'node_modules/angular2-universal-preview/dist/client/index',
      'rxjs': 'node_modules/rxjs'
    }
  };

  config = {
    env: env,
    root: root,
    src: src,
    app: app,
    testHelper: testHelper,
    assets: assets,
    index: index,
    build: build,
    report: report,
    assetsPath: assetsPath,
    buildPath: buildPath,
    tsFiles: tsFiles,
    tsSpecFiles: tsSpecFiles,
    systemjsBuild: systemjsBuild
  };

})();
module.exports = function () {
  return config;
};
