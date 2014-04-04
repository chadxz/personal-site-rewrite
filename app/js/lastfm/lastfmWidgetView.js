'use strict';
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var lastfmWidgetTemplate = require('raw!./lastfmWidget.html');
var TrackListView = require('./trackListView');

module.exports = Backbone.View.extend({

  template: _.template(lastfmWidgetTemplate),

  render: function () {
    this.$el.html(this.template());
    var trackListView = new TrackListView({
      el: this.$('#trackList')
    });
    trackListView.render();
  }
});