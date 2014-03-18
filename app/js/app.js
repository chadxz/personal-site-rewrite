define([
  'jquery',
  'underscore',
  'backbone',
  'pinboard/pinboardWidgetView',
  'lastfm/lastfmWidgetView'
], function ($, _, Backbone, PinboardWidgetView, LastfmWidgetView) {
  'use strict';

  return {
    initialize: function () {
      new PinboardWidgetView({
        el: $('#pinboardWidget')
      }).render();

      new LastfmWidgetView({
        el: $('#lastfmWidget')
      }).render();
    }
  };
});
