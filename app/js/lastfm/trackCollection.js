define([
  'jquery',
  'underscore',
  'backbone',
  'lastfm/trackModel'
], function ($, _, Backbone, TrackModel) {
  'use strict';
  
  return Backbone.Collection.extend({
    model: TrackModel,
    url: '/lastfm'
  });
});
