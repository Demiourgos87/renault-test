var gulp = require('gulp'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglyfly'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    order = require('gulp-order'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create(),
    reloadBrowser = browserSync.reload;

gulp.task('concatJS', function() {
  gulp.src('app/js_dev/**/*.js')
  .pipe(order([
    "plugins/slick.js",
    "plugins/picturefill.js",
    "plugins/debounce.js",
    "helpers/*.js",
    "**/*.js"
  ]))
  .pipe(concat('master.js'))
  .pipe(gulp.dest('app/master/js/'));
});

gulp.task('compileSASS', function() {
  return gulp.src('app/scss/master.scss')
  .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('app/master/css/'))
  .pipe(browserSync.stream());
});

gulp.task('uglifyJS', function() {
  return gulp.src('app/master/js/master.js')
  .pipe(rename('master.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js/'))
  .pipe(browserSync.stream());
});

gulp.task('uglifyCSS', function() {
  return gulp.src('app/master/css/master.css')
  .pipe(rename('master.min.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('app/css/'));
});

gulp.task('buildCSS', function() {
  runSequence('compileSASS', 'uglifyCSS');
});

gulp.task('buildJS', function() {
  runSequence('concatJS', 'uglifyJS');
});

gulp.task('watch', function() {

  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });

  gulp.watch('app/js_dev/**/*.js', ['buildJS']);
  gulp.watch('app/scss/**/*.scss', ['buildCSS']);
  gulp.watch("app/*.html").on('change', reloadBrowser);

});

gulp.task('default', ['watch']);
