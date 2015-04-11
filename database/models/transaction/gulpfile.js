var gulp = require("gulp"),
	del = require('del'),
	vinylPaths = require('vinyl-paths');


gulp.task("clean", function() {
	return gulp.src(["./build","./bin"],{read: false})
		.pipe(vinylPaths(del));
});