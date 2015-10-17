// dependencies
var gulp = require('gulp');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

var config = {
	// port: 9005,
	// devBaseUrl: 'http://localhost',
	paths: {
		html: './public/index.html',
		js: './public/js/**/*.{js,jsx}',
		sass: './public/sass/**/*.{sass,scss}',
		dist: './dist',
		mainJs: './public/js/main.js',
    mainSass: './public/sass/main.sass'
	},
  onError: function(error) {
    gutil.beep();
    gutil.log(gutil.colors.red(error.message));
    this.emit('end');
  }
};

// js task
gulp.task('js', function() {
	browserify(config.paths.mainJs)
		.transform(babelify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/js'))
		.pipe(browserSync.reload({
      stream: true
    }));
});

// css task
gulp.task('css', function () {
  return gulp.src(config.paths.sass)
    .pipe(plumber(config.onError))
    .pipe(sass())
    .pipe(prefix(['last 2 versions', 'ie 9'], {
      cascade: true
    }))
    .pipe(gulp.dest(config.paths.dist + '/css'))
		.pipe(browserSync.reload({
      stream: true
    }));
});

// html
gulp.task('html', function (){
  return gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
		.pipe(browserSync.reload({
      stream: true
    }));
});

// nodemon task
// runs and refreshes node server
gulp.task('nodemon', function () {
  return nodemon({
    script: 'server.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' }
  });
});

// browserSync task
gulp.task('browser-sync', ['nodemon'], function () {
  var port = process.env.PORT || 8080;

  browserSync.init({

    // All of the following files will be watched
    files: ['public/**/*.*'],

    // Tells BrowserSync on where the express app is running
    // so when this is localhost it doesnt load the page but when it is 127.0.0.1 it works
    proxy: 'http://127.0.0.1:' + port,

    // This port should be different from the express app port
    port: 4000,

  });
});

// Watch task
gulp.task('watch', function () {
  gulp.watch(config.paths.js, ['js']);
  gulp.watch(config.paths.sass, ['css']);
  gulp.watch(config.paths.html, ['html']);
});

// Default Task
gulp.task('default', [
  'js',
  'css',
  'html',
  'browser-sync',
  'watch'

]);
