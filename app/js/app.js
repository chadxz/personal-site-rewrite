define([
  'jquery',
  'underscore',
  'backbone',
  'pinboard/pinboardListView'
], function ($, _, Backbone, PinboardListView) {
  return {
    initialize: function () {
      var pinboardListView = new PinboardListView({
        el: $('#pinboardList')
      });

      pinboardListView.render();
    }
  };
});
