var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

/* Start live server dev mode */
gulp.task('serve-dev', ['tsc-app', 'watch-ts', 'watch-sass', 'watch-html'], function () {
  startServer('development');
});

/* Start live server production mode */
gulp.task('serve-build', ['build'], function () {
  startServer('production');
});

function startServer(env) {
  return nodemon({
    watch: [
      'src'
    ],
    ext: 'js ts json html',
    script: 'src/server.js',
    env: {'NODE_ENV': env}
  })
    .on('restart', function () {
      //gulp.run(['build']);
    });
}
