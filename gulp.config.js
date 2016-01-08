var config = {};
(function () {
  var env = 'development';
  var root = '';
  var src = root + 'src/';
  var app = root + 'app/';
  var testHelper = root + 'test-helpers/';
  var assets = root + 'assets/';
  var assetsPath = {
    scss: assets + 'scss/',
    styles: assets + 'styles/',
    images: assets + 'images/',
    fonts: assets + 'fonts/'
  };
  var index = root + 'index.ng2.html';
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
    map: {
      'angular2': 'node_modules/angular2',
      'rxjs': 'node_modules/rxjs'
    },
    packages: {
      app: {
        format: 'register',
        defaultExtension: 'js'
      }
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
