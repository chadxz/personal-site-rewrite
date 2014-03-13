// copy the app directory to app-dist,
// and concat+minify all javascript and
// html template assets into bootstrap.js
({
  appDir: '../',
  baseUrl: 'js',
  mainConfigFile: 'bootstrap.js',
  dir: '../../app-dist',
  skipDirOptimize: true,
  preserveLicenseComments: false,
  optimize: "uglify2",
  keepBuildDir: false,
  inlineText: true,
  useStrict: true,
  removeCombined: true,
  modules: [{
    name: 'bootstrap'
  }]
})
