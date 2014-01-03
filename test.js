var assert = require('assert');
var requireCwd = require('./')

// It should throw Error if package name not found
try {
	var n = requireCwd('non-existing-package');
	process.exit(1);
} catch(e) {
}