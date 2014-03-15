var gulp = require('gulp');
var gutil = require('gulp-util');
var express = require('express');
var path = require('path');
var tinylr = require('tiny-lr');
var DEFAULT_LR_PORT = 35729;

exports.serve = serve;
exports.serveAndWatch = serveAndWatch;

function serve(rootPath, port, watchCallback) {
  port = port || 3000;

  gutil.log('serving files at', rootPath);
  var app = express();
  app.use(express.static(path.resolve(rootPath)));
  app.listen(port, function () {
    gutil.log('listening at http://localhost:' + port);

    if (typeof(watchCallback) === 'function') {
      var lr = tinylr();
      lr.listen(DEFAULT_LR_PORT, function() {
        gutil.log('livereload listening on', DEFAULT_LR_PORT);
        watchCallback(app, lr);
      });
    }
  });
}

function watch(watchGlob, express, livereload) {
  return gulp.watch(watchGlob, function (event) {
    livereload.changed({
      body: {
        files: event.path
      }
    });
  });
}

function serveAndWatch(relativePath, watchGlob, port) {
  port = port || 3000;
  var rootPath = path.resolve(relativePath);
  var watcher = watch.bind(null, watchGlob);
  return serve(rootPath, port, watcher);
}

