define([
  'jquery',
  'underscore',
  'backbone',
  'pinboard/pinboardModel',
  'text!pinboard/pinboardItem.html'
], function ($, _, Backbone, PinboardModel, pinboardItemTemplate) {
  'use strict';
  var PinboardView = Backbone.View.extend({

    tagName: 'li',

    template: _.template(pinboardItemTemplate),

    render: function () {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }
  });

  return PinboardView;
});
