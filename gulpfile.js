var gulp = require('gulp'),
	gutil = require('gulp-util'),
	jshint = require('gulp-jshint');

/* ----- Linting ----- */

var JSHintOptions = {
	'browser': true,

	'undef': true,
	'trailing': true,
	'curly': true,
	'bitwise': true,
	'forin': true,
	'freeze': true,
	'immed': true,
	'noarg': true,
	'nonbsp': true,
	'unused': true,
	'latedef': true,
	'scripturl': true,
	'predef': [ 'console' ]
};

gulp.task('hint', function() {
	var errors = false;

	return gulp.src([ './src/*.js' ])
		.pipe(jshint(JSHintOptions))
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'));
});