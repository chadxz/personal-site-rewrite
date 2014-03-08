define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
  'use strict';
  var PinboardModel = Backbone.Model.extend({
    defaults: {
      title: ''
    }
  });

  return PinboardModel;
});
