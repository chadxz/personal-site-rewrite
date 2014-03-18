define([
  'jquery',
  'underscore',
  'backbone',
  'text!lastfm/lastfmWidget.html',
  'lastfm/trackListView'
], function ($, _, Backbone, lastfmWidgetTemplate, TrackListView) {
  'use strict';

  return Backbone.View.extend({

    template: _.template(lastfmWidgetTemplate),

    render: function () {
      this.$el.html(this.template());
      var trackListView = new TrackListView({
        el: this.$('#trackList')
      });
      trackListView.render();
    }
  });
});
