var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', connect.server());

gulp.task('watch', function () {
  var watchGlob = [
    './app/**/*.{html,js}',
    '!./app/components/**/*'
  ];

  gulp.watch(watchGlob, function (event) {
    console.log('watch event: ' + event.type);
    gulp.src(event.path)
        .pipe(connect.reload());
  });
});

gulp.task('default', ['connect', 'watch']);
