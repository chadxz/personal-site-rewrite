'use strict';
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var PinboardModel = require('./pinboardModel');

module.exports = Backbone.Collection.extend({
  model: PinboardModel,
  url: '/pinboard'
});