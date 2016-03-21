Package.describe({
    name: 'rocketchat:portal',
    version: '0.0.1',
    summary: 'Portal',
    git: ''
});

var fs = Npm.require('fs');
var npmPackages = JSON.parse(fs.readFileSync('packages/rocketchat-portal/portals/package.json', 'utf8'));
Npm.depends(npmPackages["dependencies"]);

Package.onUse(function(api) {
    api.versionsFrom('1.0');

    api.use([
        'coffeescript',
        'rocketchat:lib',
        'cosmos:browserify@0.10.0',
        'react@0.14.3'
    ]);

    var _ = Npm.require('underscore');
    var fs = Npm.require('fs');
    var portalFiles = _.compact(_.map(fs.readdirSync('packages/rocketchat-portal/portals'), function(filename) {
        if (filename.endsWith(".js") || filename.endsWith("options.json")) {
            api.addFiles('portals/' + filename, 'client');
        } else if (filename.endsWith(".jsx")) {
            api.addFiles('portals/' + filename, 'client');
            api.export(["Portal" + filename.slice(0, -4), ]);
        }
    }));

    api.export(['React', ]);
    api.use('kadira:flow-router', 'client');
    api.use('templating', 'client');

    api.addFiles([
        'client/routes.coffee',
        'client/startup.coffee',
        'client/tabBar.coffee',
        'client/portal.html',
        'client/portal.jsx',
        'client/sidebar.js',
        'client/portal-sidebar.html',
        'client/portal-sidebar.js',
        'client/portal-sidebar-flex.html',
        'client/portal-sidebar-flex.js',
        'client/portal-sidebar-item.html',
    ], 'client');
});

Package.onTest(function(api) {

});

