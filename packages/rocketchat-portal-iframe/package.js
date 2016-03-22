Package.describe({
    name: 'rocketchat:portal-iframe',
    version: '0.0.1',
    summary: 'Portal IFrame',
    git: ''
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');

    api.use([
        'coffeescript',
        'rocketchat:lib',
    ]);

    api.use('kadira:flow-router', 'client');
    api.use('templating', 'client');

    api.addFiles([
        'client/sidebar.js',
        'client/portal.html',
        'client/portal.js',
        'client/portal-sidebar-flex.html',
        'client/portal-sidebar-flex.js',
        'client/portal-sidebar.html',
        'client/portal-sidebar.js',
        'client/routes.coffee',
        'client/startup.coffee',
        'client/collection.coffee'
    ], 'client');

    api.addFiles([
        'server/models/portals.coffee',
        'server/methods/addPortal.coffee',
        'server/methods/updatePortal.coffee',
        'server/methods/deletePortal.coffee',
        'server/publications/portals.coffee'
    ], 'server');

    api.addFiles([
        'lib/rocketchat.coffee'
    ], ['client', 'server']);

});

Package.onTest(function(api) {

});

