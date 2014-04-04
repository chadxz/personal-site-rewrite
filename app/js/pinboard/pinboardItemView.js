'use strict';
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var PinboardModel = require('./pinboardModel');
var pinboardItemTemplate = require('raw!./pinboardItem.html');

module.exports = Backbone.View.extend({

  tagName: 'li',

  template: _.template(pinboardItemTemplate),

  render: function () {
    var attributes = this.model.toJSON({ computedFields: true });
    this.$el.html(this.template(attributes));
    return this;
  }
});