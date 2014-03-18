define([
  'jquery',
  'underscore',
  'backbone',
  'lastfm/trackModel',
  'text!lastfm/track.html',
], function ($, _, Backbone, TrackModel, trackTemplate) {
  'use strict';
  
  return Backbone.View.extend({

    tagName: 'li',

    template: _.template(trackTemplate),

    render: function () {
      var attributes = this.model.toJSON({ computedFields: true });
      this.$el.html(this.template(attributes));
      return this;
    }
  });
});
