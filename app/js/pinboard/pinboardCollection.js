define([
  'jquery',
  'underscore',
  'backbone',
  'pinboard/pinboardModel'
], function ($, _, Backbone, PinboardModel) {

  var PinboardCollection = Backbone.Collection.extend({
    model: PinboardModel,

    initialize: function () {
      var pins = [1,2,3].map(function (i) {
        return new PinboardModel({ title: 'pin' + i });
      });

      this.add(pins);
    }
  });

  return PinboardCollection;
});
