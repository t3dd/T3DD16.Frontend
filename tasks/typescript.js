var gulp = require('gulp');
var config = require('../gulp.config')();
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var sourcemaps = require('gulp-sourcemaps');
var inlineNg2Template = require('gulp-inline-ng2-template');
var gulpif = require('gulp-if');
var path = require('path');

/* Initialize TS Project */
var tsProject = ts.createProject(config.root + 'tsconfig.json');
var tsFiles = [].concat(config.tsFiles, config.tsSpecFiles);

/* Watch changed typescripts file and compile it */
gulp.task('watch-ts', function () {
  return gulp.watch(tsFiles, function (file) {
    console.log('Compiling ' + file.path + '...');
    return compileTs(file.path);
  });
});

/* Compile typescripts */
gulp.task('tsc', ['clean-ts'], function () {
  return compileTs(tsFiles);
});

gulp.task('tsc-app', ['clean-ts-app', 'sass', 'html'], function () {
  return compileTs(config.tsFiles);
});

gulp.task('tsc-spec', ['clean-ts-spec'], function () {
  return compileTs(config.tsSpecFiles);
});

/* Lint typescripts */
gulp.task('tslint', ['tslint-app', 'tslint-spec']);

gulp.task('tslint-app', function () {
  return lintTs(config.tsFiles);
});

gulp.task('tslint-spec', function () {
  return lintTs(config.tsSpecFiles);
});

function lintTs(files) {
  return gulp.src(files)
    .pipe(tslint())
    .pipe(tslint.report('prose', {
      summarizeFailureOutput: true
    }));
}

function compileTs(files) {
  var tsResult = gulp.src(files, {
      base: 'src'
    })
    .pipe(sourcemaps.init())
    .pipe(gulpif(config.env === 'production', inlineNg2Template({ base: '/dist' })))
    .pipe(inlineNg2Template({ base: '/dist' }))
    .pipe(ts(tsProject));
  tsResult.dts.pipe(gulp.dest(config.app));
  return tsResult.js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.app));
}
