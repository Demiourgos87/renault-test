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
  return gulp.src('app/js/**/*.js')
  .pipe(concat('master.js'))
  .pipe(gulp.dest('app/assets/master/'));
});

gulp.task('compileSASS', function() {
  return gulp.src('app/scss/master.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('app/assets/master/'))
  .pipe(browserSync.stream());
});

gulp.task('uglifyJS', function() {
  return gulp.src('app/assets/master/master.js')
  .pipe(rename('master.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/assets/dist/js/'))
  .pipe(browserSync.stream());
});

gulp.task('uglifyCSS', function() {
  return gulp.src('app/assets/master/master.css')
  .pipe(rename('master.min.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('app/assets/dist/css/'));
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

  gulp.watch('app/js/**/*.js', ['buildJS']);
  gulp.watch('app/scss/**/*.scss', ['buildCSS']);
  gulp.watch("app/*.html").on('change', reloadBrowser);

});

gulp.task('default', ['watch']);
