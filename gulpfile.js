'use strict';

var metal = require('gulp-metal');

metal.registerTasks(
	{
		bundleFileName: 'breadcrumbs.js',
		globalName: 'metal',
		mainBuildJsTasks: ['build:globals'],
		moduleName: 'lexicon-breadcrumbs',
		soyDeps: ['node_modules/*lexicon*/**/*.soy', 'node_modules/*metal*/**/*.soy']
	}
);