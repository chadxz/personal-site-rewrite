var gulp = require('gulp');
var clean = require('gulp-clean');
var replace = require('gulp-replace');
var cssFilter = require('gulp-filter')('**/*.css');
var useref = require('gulp-useref');
var minifyCSS = require('gulp-minify-css');
var requirejs = require('requirejs');
var server = require('./gulp-tasks/serve');

gulp.task('build-clean', function () {
  return gulp.src('app-dist/*', { read: false })
      .pipe(clean());
});

gulp.task('build-copy-fonts', function () {
  return gulp.src('app/components/fontawesome/fonts/*')
      .pipe(gulp.dest('app-dist/fonts/'));
});

gulp.task('build-css-html', function () {
  // read build: statements from html
  // and transform them with other gulp plugins
  return gulp.src('app/*.html')
      .pipe(useref.assets())
      .pipe(cssFilter)
      .pipe(replace('../fonts', 'fonts'))
      .pipe(minifyCSS())
      .pipe(cssFilter.restore())
      .pipe(useref.restore())
      .pipe(useref())
      .pipe(gulp.dest('app-dist'));
});

// 'build-js' needs to wait on 'build-css-html' to complete,
// because it overwrites the production.js created by 'build-css-html'
gulp.task('build-js', ['build-css-html'], function (done) {
  // requirejs optimizer
  // http://requirejs.org/docs/optimization.html
  // http://requirejs.org/docs/node.html#optimizer
  // https://github.com/jrburke/r.js/blob/master/build/example.build.js
  requirejs.optimize({
    baseUrl: 'app/js',
    preserveLicenseComments: false,
    optimize: "uglify2",
    inlineText: true,
    useStrict: true,
    wrap: true,
    name: '../components/almond/almond',
    include: ['bootstrap.js'],
    mainConfigFile: 'app/js/bootstrap.js',
    out: 'app-dist/production.js'
  }, function optimizeSuccess() {
    done();
  }, function optimizeError(err) {
    done(err);
  })
});

gulp.task('build', ['build-clean', 'build-css-html', 'build-js', 'build-copy-fonts']);

gulp.task('serve-dev', function () {
  var rootPath = 'app';
  var watchGlob = [
    rootPath + '/**/*.{html,js,css}',
    '!' + rootPath + '/components/**/*'
  ];

  server.serveAndWatch(rootPath, watchGlob);
  // purposefully not returning anything. the task should run indefinitely
});

gulp.task('serve-dist', ['build'], function () {
  server.serve('./app-dist');
  // purposefully not returning anything. the task should run indefinitely
});

gulp.task('default', ['serve-dev']);
