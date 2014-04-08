'use strict';
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './app/js/bootstrap.js',
  output: {
    // the path to put the built file
    path: path.join(__dirname, 'app-dist/'),

    // the name of the file to be built
    filename: 'production.js'
  },
  resolve: {
    alias: {
      'jquery': 'jquery/dist/jquery',
      'moment': 'moment/moment',
      'backbone-computedfields': 'backbone-computedfields/lib/amd/backbone.computedfields'
    },
    modulesDirectories: ['node_modules', 'bower_components']
  },
  plugins: [
    // fix weird inclusion of all languages when requiring moment
    new webpack.ContextReplacementPlugin(/moment[\\\/]lang$/, /^\.\/(en-gb)$/)
  ]
};