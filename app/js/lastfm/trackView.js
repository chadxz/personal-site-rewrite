'use strict';
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var TrackModel = require('raw!./trackModel');
var trackTemplate = require('raw!./track.html');

module.exports = Backbone.View.extend({

  tagName: 'li',

  template: _.template(trackTemplate),

  render: function () {
    var attributes = this.model.toJSON({ computedFields: true });
    this.$el.html(this.template(attributes));
    return this;
  }
});
