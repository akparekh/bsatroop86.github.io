// Metalsmith and Metalsmith Plugins
var Metalsmith = require('metalsmith');
var jade 			 = require('metalsmith-jade');
var less			 = require('metalsmith-less');
var markdown   = require('metalsmith-markdown');
var nav				 = require('metalsmith-navigation');
var templates  = require('metalsmith-templates');

// Custom handlebar extensions
require('./handlebarExtensions')


// Configurations for Build Items:
// Configuring Navigation
var navConfigs = {
	primary:{
		sortBy: 'nav_sort',
		filterProperty: 'nav_groups',
	}
};

var navSettings = {
	navListProperty: 'navs',
};

// Configuring Less
var lessOptions = {
	pattern: 'css/style.less',
	parse: {
		paths: ['src/css']
	}
}


// Run build
Metalsmith(__dirname)
	.use(jade())
	.use(less(lessOptions))
	.use(markdown())
	.use(nav(navConfigs, navSettings))
	.use(templates('handlebars'))
  .build(function(err){
		if (err) throw err;
	}
);

console.log("Build Complete");
