var resolve = require('resolve').sync;

module.exports = function require_cwd(name) {
	var absolute_path = resolve(name, { basedir: process.cwd() });
	return require(absolute_path);
}
