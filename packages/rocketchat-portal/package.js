Package.describe({
	name: 'rocketchat:portal',
	version: '0.0.1',
	summary: 'Portal',
	git: ''
});

var fs = Npm.require('fs');
var npmPackages = JSON.parse(fs.readFileSync('packages/rocketchat-portal/packages.json', 'utf8'));
npmPackages['externalify'] = '0.1.0';
Npm.depends(npmPackages);

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use([
		'coffeescript',
		'rocketchat:lib',
		'cosmos:browserify@0.10.0',
                'react@0.14.3'
	]);

        api.export(['React', ]);
        api.use('kadira:flow-router', 'client');
	api.use('templating', 'client');

	api.addFiles([
                'client/routes.coffee',
		'client/startup.coffee',
		'client/tabBar.coffee',
                'client/lib/portal.browserify.js',
                'client/lib/portal.browserify.options.json',
		'client/portal.html',
		'client/portal.jsx',
	], 'client');
});

Package.onTest(function(api) {

});
