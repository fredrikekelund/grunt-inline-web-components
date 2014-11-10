/*
 * grunt-inline-web-components
 * https://github.com/fredrikekelund/grunt-inline-web-components
 *
 * Copyright (c) 2014 Fredrik Ekelund
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: ".jshintrc",
				reporter: require("jshint-stylish")
			},
			all: [
				"Gruntfile.js",
				"tasks/*.js",
				"test/*.js"
			]
		},
		clean: {
			test: "test/result.html"
		},
		mochacli: {
			options: {
				reporter: "nyan",
				bail: true
			},
			all: ["test/*.js"]
		},
		inline_web_components: {
			options: {
				components: {
					"about-app": "test/components/about-app.html",
					"cool-component.critical": "test/components/cool-component.html"
				}
			},
			test: {
				files: {
					"test/result.html": ["test/test.html"]
				}
			}
		}
	});

	// Actually load this plugin's task
	grunt.loadTasks("tasks");

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-mocha-cli");

	grunt.registerTask("test", ["clean", "inline_web_components", "mochacli"]);
	grunt.registerTask("default", ["jshint", "test"]);

};
