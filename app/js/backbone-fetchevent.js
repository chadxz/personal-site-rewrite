// override the default Backbone Model/Collection 'fetch' method,
// adding a 'fetch' event at the beginning of the operation.
// This allows views to intelligently show loading view state
// when the collection it is assigned to is in the middle of a
// network request.
// credit: http://tbranyen.com/post/how-to-indicate-backbone-fetch-progress
define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
  'use strict';

  _.each(["Model", "Collection"], function(name) {

    var ctor = Backbone[name];
    var fetch = ctor.prototype.fetch;

    ctor.prototype.fetch = function() {
      this.trigger("fetch", this);
      return fetch.apply(this, arguments);
    };
  });

  // return nothing. this modifies Backbone
});
