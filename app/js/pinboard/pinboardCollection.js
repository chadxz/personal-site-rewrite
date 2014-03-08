define([
  'jquery',
  'underscore',
  'backbone',
  'pinboard/pinboardModel'
], function ($, _, Backbone, PinboardModel) {
  'use strict';
  var PinboardCollection = Backbone.Collection.extend({
    model: PinboardModel,
    url: '/pinboard'
  });

  return PinboardCollection;
});
