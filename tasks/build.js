var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../gulp.config')();
var inject = require('gulp-inject');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');
var Builder = require('systemjs-builder');

/* Prepare build using SystemJS Builder */
gulp.task('build', function (done) {
  config.env = 'production';
  //runSequence('test', 'build-sjs', done);
  runSequence('build-sjs', done);
});

gulp.task('build-sjs', function (done) {
  runSequence('tsc-app', 'build-assets', buildSJS);
  function buildSJS() {
    var builder = new Builder(config.app);
    builder.config(config.systemjsBuild);
    builder.loader.defaultJSExtensions = true;
    builder
      .bundle('client',
        config.build.path + 'client.js',
        {
          minify: false,
          globalDefs: {DEBUG: false},
          fetch: function (load, fetch) {
            if (load.name.indexOf('node_modules') !== -1) {
              load.name = load.name.replace('dist/node_modules', 'node_modules');
              load.address = load.name;
            }
            return fetch(load);
          }
        }
      )
      .then(function () {
        console.log('Build complete');
        done();
      })
      .catch(function (ex) {
        console.log('error', ex);
        done('Build failed.');
      });
  }
});

/* Concat and minify/uglify all css, js, and copy fonts */
gulp.task('build-assets', function (done) {
  runSequence('clean-build', ['sass', 'fonts'], function () {
    done();

    gulp.src(config.assetsPath.images + '**/*.*', {
        base: config.assetsPath.images
      })
      .pipe(gulp.dest(config.build.assetPath + 'images'));

    return gulp.src(config.index)
      .pipe(useref({searchPath: '.'}))
      .pipe(gulpif('*.js', uglify()))
      .pipe(gulpif('*.css', cssnano()))
      .pipe(gulpif('*.html', htmlmin({
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true
      })))
      .pipe(gulp.dest(config.build.path));
  });
});

/* Copy fonts in bower */
gulp.task('fonts', function () {
  gulp.src(config.assetsPath.fonts + '**/*.*', {
      base: config.assetsPath.fonts
    })
    .pipe(gulp.dest(config.buildPath.fonts));
});
