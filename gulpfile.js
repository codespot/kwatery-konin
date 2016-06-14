var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('sass', function() {
  return gulp.src('./sass/layout.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./public/generated/'));
});

gulp.task('sass:watch', function() {
  return gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('server', function() {
  return nodemon({
    script: 'index.js',
    watch: 'index.js'
  });
});

gulp.task('javascript', function() {
  return gulp.src(['./javascript/**/*.js'])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/generated/'));
});

gulp.task('javascript:watch', function() {
  return gulp.watch('./javascript/**/*.js', ['javascript']);
});

gulp.task('deploy', ['sass', 'javascript']);
gulp.task('server:dev', ['sass:watch', 'javascript:watch', 'server']);
