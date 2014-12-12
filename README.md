# grunt-inline-web-components

> Inline web components' template files into an HTML file

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-inline-web-components --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-inline-web-components');
```

## The "inline_web_components" task

### Overview
In your project's Gruntfile, add a section named `inline_web_components` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
	inline_web_components: {
		options: {
			components: {
				"info-window": "components/info-window.html",
				"my-component:first": "components/my-component.html",
				"flashy-button.critical": "components/flashy-button.html"
			}
		},
		dist: {
			files: [
				expand: true,
				cwd: "app",
				src: "{,*/}*.html",
				dest: "dist"
			]
		},
	},
});
```

### Options

#### options.components
Type: `Object`

Each key is a jQuery style selector, its value is a path to a template file to inline into every node that matches the selector.

## License

Copyright (c) 2014 [Fredrik Ekelund](http://fredrik.computer)
Licensed under the MIT license.
