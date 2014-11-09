/* global describe, it */

"use strict";

var grunt  = require("grunt"),
	assert = require("assert");

describe("inline_web_components grunt task", function() {
	it("should have inlined the components", function() {
		var result = grunt.file.read("test/result.html"),
			expect = grunt.file.read("test/expect.html");

		assert.equal(result, expect);
	});
});
