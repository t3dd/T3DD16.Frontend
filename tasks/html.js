var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var config = require('../gulp.config')();

gulp.task('html', function () {
  return gulp.src(config.src + '**/*.html')
    //.pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(config.app))
});

gulp.task('watch-html', function () {
  gulp.watch(config.src + '**/*.html', ['html']);
});
