'use strict';
var webpack = require('webpack');

module.exports = {
  entry: './app/js/bootstrap.js',
  output: {
    path: './app/js/',
    filename: 'bundle.js'
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