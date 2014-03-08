define([
  'jquery',
  'underscore',
  'backbone',
  'pinboard/pinboardCollection',
  'pinboard/pinboardView',
  'text!pinboard/pinboardList.html',
], function ($, _, Backbone, PinboardCollection, PinboardView, pinboardListTemplate) {
  'use strict';
  var PinboardListView = Backbone.View.extend({

    template: _.template(pinboardListTemplate),

    initialize: function () {
      this.collection = new PinboardCollection();
      var xhr = this.collection.fetch().then(function () {
        this.render();
      }.bind(this));
    },

    render: function () {
      this.$el.empty();

      this.collection.each(function (item) {
        this.renderItem(item);
      }, this);

      return this;
    },

    renderItem: function (item) {
      var pinboardView = new PinboardView({
        model: item
      });

      this.$el.append(pinboardView.render().el);
    }
  });

  return PinboardListView;
});
