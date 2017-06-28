var gulp = require('gulp'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglyfly'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create(),
    reloadBrowser = browserSync.reload;

gulp.task('concatJS', function() {
  return gulp.src('js/*.js')
  .pipe(concat('master.js'))
  .pipe(gulp.dest('dist/js/'));
});

gulp.task('compileSASS', function() {
  return gulp.src('sass/master.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('sass/'))
  .pipe(browserSync.stream());
});

gulp.task('uglifyJS', function() {
  return gulp.src('dist/js/master.js')
  .pipe(rename('master.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/'))
  .pipe(browserSync.stream());
});

gulp.task('uglifyCSS', function() {
  return gulp.src('sass/master.css')
  .pipe(rename('master.min.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('dist/css/'));
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
      baseDir: "./"
    }
  });

  gulp.watch('js/*.js', ['buildJS']);
  gulp.watch('sass/**/*.scss', ['buildCSS']);
  gulp.watch("*.html").on('change', reloadBrowser);

});

gulp.task('default', ['watch']);
