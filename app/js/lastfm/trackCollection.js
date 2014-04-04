'use strict';
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var TrackModel = require('./trackModel');

module.exports = Backbone.Collection.extend({
  model: TrackModel,
  url: '/lastfm'
});