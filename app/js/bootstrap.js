require.config({
  paths: {
    jquery: '/components/jquery/dist/jquery',
    underscore: '/components/underscore/underscore',
    backbone: '/components/backbone/backbone',
    text: '/components/requirejs-text/text'
  }
});

require([
  'backbone',
  'underscore',
  'app',
  'config'
], function (Backbone, _, App, config) {
  'use strict';

  // set base api url on all sync operations
  var backboneSync = Backbone.sync;
  Backbone.sync = function (method, model, options) {
    options = _.extend(options, {
        url: config.api.url + (_.isFunction(model.url) ? model.url() : model.url)
    });

    return backboneSync(method, model, options);
  };

  App.initialize();
});
