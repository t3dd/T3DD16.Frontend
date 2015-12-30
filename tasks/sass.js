var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../gulp.config')();
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src(config.assetsPath.scss + '**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.assetsPath.styles));
});

gulp.task('watch-sass', function () {
  gulp.watch(config.assetsPath.scss + '**/*.scss', ['sass']);
});
