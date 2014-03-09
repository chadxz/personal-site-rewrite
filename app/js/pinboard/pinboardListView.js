define([
  'jquery',
  'underscore',
  'backbone',
  'pinboard/pinboardCollection',
  'pinboard/pinboardItemView',
  'text!pinboard/pinboardLoading.html',
  'text!pinboard/pinboardList.html'
], function ($, _, Backbone, PinboardCollection,
  PinboardItemView, pinboardLoadingTemplate, pinboardListTemplate) {
  'use strict';

  var PinboardListView = Backbone.View.extend({

    template: _.template(pinboardListTemplate),

    loadingTemplate: _.template(pinboardLoadingTemplate),

    initialize: function () {
      this.collection = new PinboardCollection();

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
      var pinboardItemView = new PinboardItemView({
        model: item
      });

      this.$('#pinboardItems').append(pinboardItemView.render().el);
    }
  });

  return PinboardListView;
});
