require.config({
  paths: {
    jquery: '../components/jquery/dist/jquery',
    underscore: '../components/underscore/underscore',
    backbone: '../components/backbone/backbone',
    text: '../components/requirejs-text/text',
    moment: '../components/moment/moment',
    'backbone-computedfields': '../components/backbone-computedfields/lib/amd/backbone.computedfields',
  },
  shim: {
    moment: {
      exports: 'moment'
    }
  }
});

require([
  'app',
  'backbone-baseurl', // modifies Backbone.sync to set a baseurl
  'backbone-fetchevent', // adds a 'fetch' event to Backbone Model/Collection.fetch
  'backbone-computedfields' // adds Backbone.ComputedFields class
], function (App) {
  'use strict';
  App.initialize();
});
