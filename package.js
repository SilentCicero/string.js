/* jshint ignore:start */
Package.describe({
  name: 'silentcicero:string.js',
  version: '0.0.1',
  summary: 'String.js - A dead simple, customizable plain text parser for JS - ported to meteor',
  git: 'https://github.com/SilentCicero/string.js',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

  api.export(['S'], ['client']);

  api.addFiles('string.js', 'client');
  api.addFiles('package-init.js', 'client');
});