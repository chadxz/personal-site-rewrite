define([
  'jquery',
  'underscore',
  'backbone',
  'text!pinboard/pinboardWidget.html',
  'pinboard/pinboardListView'
], function ($, _, Backbone, pinboardWidgetTemplate, PinboardListView) {
  'use strict';

  var PinboardWidgetView = Backbone.View.extend({

    template: _.template(pinboardWidgetTemplate),

    render: function () {
      this.$el.html(this.template());
      var pinboardListView = new PinboardListView({
        el: $('#pinboardList')
      });
      pinboardListView.render();
    }
  });

  return PinboardWidgetView;
});
