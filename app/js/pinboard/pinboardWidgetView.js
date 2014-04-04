'use strict';
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var pinboardWidgetTemplate = require('raw!./pinboardWidget.html');
var PinboardListView = require('./pinboardListView');

module.exports = Backbone.View.extend({

  template: _.template(pinboardWidgetTemplate),

  render: function () {
    this.$el.html(this.template());
    var pinboardListView = new PinboardListView({
      el: this.$('#pinboardList')
    });
    pinboardListView.render();
  }
});