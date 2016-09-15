const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const minify = require('gulp-clean-css');

// Compile SASS w/ autoprefixer
gulp.task('sass', function () {
  return gulp.src('./_sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'] }) ]))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./_build/css'))
    .pipe(minify())
    .pipe(gulp.dest('./'));
});

// SASS watch task
gulp.task('watch', function () {
  gulp.watch('./_sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch'], function() {

})
