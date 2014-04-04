'use strict';
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var moment = require('moment');
var dateTimeFormat = 'MMMM D, YYYY @ h:mm a';

module.exports = Backbone.Model.extend({
  defaults: {
    href: '',
    description: '',
    time: ''
  },
  initialize: function () {
    this.computedFields = new Backbone.ComputedFields(this);
  },
  computed: {
    relativeDateTime: {
      depends: ['time'],
      get: function (fields) {
        return moment(fields.time).fromNow();
      },
      toJSON: false
    },
    formattedDateTime: {
      depends: ['time'],
      get: function (fields) {
        return moment(fields.time).format(dateTimeFormat);
      },
      toJSON: false
    }
  }
});