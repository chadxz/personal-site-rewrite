'use strict';
var $ = require('jquery');
var LastfmWidgetView = require('./lastfm/lastfmWidgetView');
var PinboardWidgetView = require('./pinboard/pinboardWidgetView');

module.exports = {
  initialize: function () {
    new PinboardWidgetView({
      el: $('#pinboardWidget')
    }).render();

    new LastfmWidgetView({
      el: $('#lastfmWidget')
    }).render();
  }
};