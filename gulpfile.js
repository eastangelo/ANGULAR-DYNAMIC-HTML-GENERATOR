var gulp = require('gulp'),
    connect = require('gulp-connect'),
    compass = require('gulp-compass'),
    minifyCSS = require('gulp-minify-css');

gulp.task('connect', function () {
    connect.server();
});

gulp.task('compass', function() {
    gulp.src('./src/*.scss')
        .pipe(compass({
            css: 'css',
            sass: 'scss',
            image: 'img'
        }))
        .on('error', function(error) {
            console.log(error);
            this.emit('end');
        })
        .pipe(minifyCSS())
        .pipe(gulp.dest('temp'));
});

gulp.task('default', ['connect']);
