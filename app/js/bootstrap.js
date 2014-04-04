'use strict';
var App = require('./app');
require('./backbone-baseurl'); // modifies Backbone.sync to set a baseurl
require('./backbone-fetchevent'); // adds a 'fetch' event to Backbone Model/Collection.fetch
require('backbone-computedfields'); // adds Backbone.ComputedFields class

App.initialize();