Package.describe({
  name: 'microstudi:medium-editor',
  version: '5.21.0',
  summary: "Medium editor for Meteor",
  description: "Medium editor for Meteor",
  git: "http://github.com/microstudi/meteor-medium-editor.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.addFiles([
    'lib/medium-editor/dist/js/medium-editor.js',
    'lib/medium-editor/dist/css/medium-editor.css',
    'lib/medium-editor/dist/css/themes/default.css',
    'export.js'
  ], 'client');

  api.export('MediumEditor', 'client');

});
