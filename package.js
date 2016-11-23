Package.describe({
  name: 'allowdeny-redis',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Adds support for client side mutations in combination with cultofcoders:redis-oplog',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');
  api.use([
    'ecmascript',
    'mongo',
    'minimongo',
    'ejson',
    'underscore',
    'lai:collection-extensions',
  ], 'server');
  api.addFiles('index.js', 'server');
});
