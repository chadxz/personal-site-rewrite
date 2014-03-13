var gulp = require('gulp');
var gutil = require('gulp-util');
var express = require('express');
var path = require('path');
var tinylr = require('tiny-lr');

function createServer(rootPath, port, callback) {
  var DEFAULT_LR_PORT = 35729;
  var lr = tinylr();

  gutil.log('serving files at', rootPath);

  lr.listen(DEFAULT_LR_PORT, function() {
    gutil.log('livereload listening on', DEFAULT_LR_PORT);
  });

  var app = express();
  app.use(express.static(path.resolve(rootPath)));
  app.listen(port, function () {
    gutil.log('listening on', port);
    callback(app, lr);
  });
}

function watch(rootPath, express, livereload) {
  var watchGlob = [
    rootPath + '/**/*.{html,js}',
    '!' + rootPath + '/components/**/*'
  ];

  gulp.watch(watchGlob, function (event) {
    gutil.log(gutil.colors.cyan(event.path), event.type);
    livereload.changed({
      body: {
        files: [event.path]
      }
    });
  });
}

function serveAndWatch(relativePath) {
  var rootPath = path.resolve(relativePath);
  var watcher = watch.bind(null, rootPath);
  createServer(rootPath, 3000, watcher);
}

gulp.task('serve-dev', function () {
  serveAndWatch('./app');
});

gulp.task('serve-dist', function () {
  serveAndWatch('./app-dist');
});

gulp.task('default', ['serve-dev']);