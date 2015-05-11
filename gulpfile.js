'use strict';

var gulp 			= require('gulp'),
	concat 			= require('gulp-concat'),
	uglify 			= require('gulp-uglify'),
	rename 			= require('gulp-rename'),
	sass 			= require('gulp-ruby-sass'),
	autoprefixer 	= require('gulp-autoprefixer');

var srcJs = ['./public/bower_components/angular/angular.js', './public/*.js', './public/!(bower_components)/*.js', '!./public/main.js', '!./public/main.min.js'],
	srcCss = './public/css/style.scss';

// Concatenate and mynifyJS Files
gulp.task('js', function() {
	return gulp.src(srcJs)
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./public/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('./public/'));
});

// Sass to css
gulp.task('css', function() {
	return sass(srcCss, {style: 'compressed'})
		.pipe(autoprefixer())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./public/css/'));
});

// Watch changes in source files
gulp.task('watch', function() {
	gulp.watch(srcJs, ['js']);

	gulp.watch(srcCss, ['css']);
});

// Build is runs e.g. in 'npm start' command
gulp.task('build', ['js', 'css']);

// Default Task
gulp.task('default', ['build', 'watch']);