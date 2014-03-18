define([
  'jquery',
  'underscore',
  'backbone',
  'moment'
], function ($, _, Backbone, moment) {
  'use strict';

  var lastfmMusicUrl = 'http://www.last.fm/music/';
  var dateTimeFormat = 'MMMM D, YYYY @ h:mm a';

  return Backbone.Model.extend({
    defaults: {
    },

    initialize: function () {
      this.computedFields = new Backbone.ComputedFields(this);

      // set actual artist url
      var artist = this.get('artist');
      artist.url = lastfmMusicUrl + artist.url.replace(/\s/gi, '+');
      this.set('artist', artist, { silent: true });
    },

    computed: {
      isPlaying: {
        depends: ['@attr'],
        get: function (fields) {
          return fields['@attr'] && (fields['@attr'].nowplaying === 'true');
        },
        toJSON: false
      },
      relativeDateTime: {
        depends: ['date'],
        get: function (fields) {
          return fields.date && moment.unix(fields.date.uts).fromNow();
        },
        toJSON: false
      },
      formattedDateTime: {
        depends: ['date'],
        get: function (fields) {
          return fields.date && moment.unix(fields.date.uts).format(dateTimeFormat);
        },
        toJSON: false
      }
    }
  });
});
