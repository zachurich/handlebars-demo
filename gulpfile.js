const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const imageop = require('gulp-image-optimization')
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

gulp.task('images', function(cb) {
    gulp.src(['images/*.png','images/*.jpg','src/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('images/')).on('end', cb).on('error', cb);
});

// SASS watch task
gulp.task('watch', function () {
  gulp.watch('./_sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'images', 'watch'], function() {

})
