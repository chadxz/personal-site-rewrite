define([
  'jquery',
  'underscore',
  'backbone',
  'pinboard/pinboardListView'
], function ($, _, Backbone, PinboardListView) {
  'use strict';
  return {
    initialize: function () {
      var pinboardListView = new PinboardListView({
        el: $('#pinboardList')
      });
    }
  };
});
