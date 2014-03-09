define([
  'jquery',
  'underscore',
  'backbone',
  'pinboard/pinboardWidgetView'
], function ($, _, Backbone, PinboardWidgetView) {
  'use strict';
  return {
    initialize: function () {
      var pinboardWidgetView = new PinboardWidgetView({
        el: $('#pinboardWidget')
      });
      pinboardWidgetView.render();
    }
  };
});
