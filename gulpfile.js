'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var replace = require('gulp-replace');
var cssFilter = require('gulp-filter')('**/*.css');
var useref = require('gulp-useref');
var minifyCSS = require('gulp-minify-css');
var webpack = require('webpack');
var http = require('http');
var staticsvr = require('node-static');
var webpackConfig = require('./webpack.config.js');

gulp.task('build-clean', function () {
  return gulp.src('app-dist/*', { read: false })
      .pipe(clean());
});

gulp.task('copy-fonts', ['build-clean'], function () {
  return gulp.src('app/bower_components/fontawesome/fonts/*')
      .pipe(gulp.dest('app-dist/fonts/'));
});

gulp.task('copy-images', ['build-clean'], function () {
  return gulp.src('app/images/*')
      .pipe(gulp.dest('app-dist/images/'));
})

gulp.task('build-css-html', ['build-clean'], function () {
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

gulp.task('default', ['build']);

gulp.task('build', ['build-clean', 'build-css-html', 'build-js', 'copy-fonts', 'copy-images']);

gulp.task('build-js', function(callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.plugins = myConfig.plugins.concat(
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
  );

  // run webpack
  webpack(myConfig, function(err, stats) {
    if(err) {
      throw new gutil.PluginError("[build-js]", err);
    }

    gutil.log("[build-js]", stats.toString({ colors: true }));
    callback();
  });
});

gulp.task('serve-dist', ['build'], function () {
  var files = new staticsvr.Server('./app-dist');
  http.createServer(function (req, res) {
    req.addListener('end', function () {
      files.serve(req, res);
    }).resume();
  }).listen(8080);
  gutil.log('[serve-dist] static web server listening at http://localhost:8080');
});