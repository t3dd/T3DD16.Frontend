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
    var builder = new Builder('.');
    builder.config(config.systemjsBuild);
    builder.loader.defaultJSExtensions = true;
    builder
      .bundle(config.app + 'boot',
        config.build.path + config.app + 'boot.js',
        {
          minify: true,
          globalDefs: {DEBUG: false}
        })
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

    gulp.src(config.app + '**/*.css', {
        base: config.app
      })
      .pipe(cssnano())
      .pipe(gulp.dest(config.build.app));

    gulp.src(config.assetsPath.styles + '**/*.css', {
        base: config.assetsPath.styles
      })
      .pipe(cssnano())
      .pipe(gulp.dest(config.build.assetPath + 'styles'));

    gulp.src(config.assetsPath.images + '**/*.*', {
        base: config.assetsPath.images
      })
      .pipe(gulp.dest(config.build.assetPath + 'images'));

    return gulp.src(config.index)
      .pipe(useref())
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
