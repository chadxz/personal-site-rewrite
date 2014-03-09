define([
  'jquery',
  'underscore',
  'backbone',
  'pinboard/pinboardModel',
  'text!pinboard/pinboardItem.html',
], function ($, _, Backbone, PinboardModel, pinboardItemTemplate) {
  'use strict';
  
  var PinboardItemView = Backbone.View.extend({

    tagName: 'li',

    template: _.template(pinboardItemTemplate),

    render: function () {
      var attributes = this.model.toJSON({ computedFields: true });
      this.$el.html(this.template(attributes));
      return this;
    }
  });

  return PinboardItemView;
});
