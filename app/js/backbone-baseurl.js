define([
  'jquery',
  'underscore',
  'backbone',
  'config'
], function ($, _, Backbone, config) {
  'use strict';

  // set base api url on all sync operations
  var backboneSync = Backbone.sync;
  Backbone.sync = function (method, model, options) {
    options = _.extend(options, {
        url: config.api.url + (_.isFunction(model.url) ? model.url() : model.url)
    });

    return backboneSync(method, model, options);
  };

  // return nothing. this modifies Backbone
});
