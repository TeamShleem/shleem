// dependencies
var gulp = require('gulp');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

// ON error
function onError(error) {
  gutil.beep();
  gutil.log(gutil.colors.red(error.message));
  this.emit('end');
}

// CSS Task
gulp.task('css', function () {

});

// nodemon task
// runs and refreshes node server
gulp.task('nodemon', function (cb) {

});

// browserSync task
gulp.task('browser-sync', ['nodemon'], function () {

});

// Watch task
gulp.task('watch', function () {

});

// Default Task
gulp.task('default', [

]);
