'use strict';
var _ = require('underscore');
var Backbone = require('backbone');
var config = require('./config');

// monkey patch to set base api url on all sync operations
var backboneSync = Backbone.sync;
Backbone.sync = function (method, model, options) {
  options = _.extend(options, {
      url: config.api.url + (_.isFunction(model.url) ? model.url() : model.url)
  });

  return backboneSync(method, model, options);
};