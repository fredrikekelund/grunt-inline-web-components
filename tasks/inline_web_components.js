/*
 * grunt-inline-web-components
 * https://github.com/fredrikekelund/grunt-inline-web-components
 *
 * Copyright (c) 2014 Fredrik Ekelund
 * Licensed under the MIT license.
 */

"use strict";

var inlineComponent = require("inline-web-components"),
	chalk = require("chalk");

module.exports = function(grunt) {
	grunt.registerMultiTask("inline_web_components", "Inline web component content in HTML files", function() {
		var options = this.options();

		this.files.forEach(function(file) {
			var valid = file.src.filter(function(filepath) {
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn("Source file " + chalk.cyan(filepath) + " not found.");
					return false;
				} else {
					return true;
				}
			});

			valid.forEach(function(validFile) {
				var source   = grunt.file.read(validFile),
					compiled = inlineComponent(source, options.components);

				grunt.file.write(file.dest, compiled);
				grunt.verbose.writeln("File " + chalk.cyan(file.dest) + " created");
			});
		});
	});
};
