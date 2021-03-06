Package.describe({
  name: 'marvin:lorem-ipsum',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'lorem-ipsum': '1.0.3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('lorem-ipsum.js', 'server');

  api.export('loremIpsum', 'server')
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('marvin:lorem-ipsum', 'server');
  api.addFiles('lorem-ipsum-tests.js', 'server');
});
