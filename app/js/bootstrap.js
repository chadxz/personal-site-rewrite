require.config({
  paths: {
    jquery: '/components/jquery/dist/jquery',
    underscore: '/components/underscore/underscore',
    backbone: '/components/backbone/backbone',
    text: '/components/requirejs-text/text'
  }
});

require(['app'], function (App) {
  App.initialize();
});
