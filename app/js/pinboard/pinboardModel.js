define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
  var PinboardModel = Backbone.Model.extend({
    defaults: {
      title: ''
    }
  });

  return PinboardModel;
});
