define([
  'jquery',
  'underscore',
  'backbone',
  'moment'
], function ($, _, Backbone, moment) {
  'use strict';
  
  var dateTimeFormat = 'MMMM D, YYYY @ h:mm a';

  var PinboardModel = Backbone.Model.extend({
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
    },
  });

  return PinboardModel;
});
