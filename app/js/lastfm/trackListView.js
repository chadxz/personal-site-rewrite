define([
  'jquery',
  'underscore',
  'backbone',
  'lastfm/trackCollection',
  'lastfm/trackView',
  'text!lastfm/trackLoading.html',
  'text!lastfm/trackList.html'
], function ($, _, Backbone, TrackCollection,
  TrackView, trackLoadingTemplate, trackListTemplate) {
  'use strict';

  return Backbone.View.extend({

    template: _.template(trackListTemplate),

    loadingTemplate: _.template(trackLoadingTemplate),

    initialize: function () {
      this.collection = new TrackCollection();

      // render 'loading' template when collection is loading
      this.collection.on('fetch', function () {
        this.$el.html(this.loadingTemplate());
      }, this);
    },

    render: function () {
      this.collection.fetch({ data: { limit: 5 } }).then(function () {
        this.$el.html(this.template());
        this.collection.each(function (item) {
          this.renderItem(item);
        }, this);
      }.bind(this));

      return this;
    },

    renderItem: function (item) {
      var trackView = new TrackView({
        model: item
      });
      this.$('#lastfmTracks').append(trackView.render().el);
    }
  });
});
