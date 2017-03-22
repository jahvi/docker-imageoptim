var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var imageminGuetzli = require('imagemin-guetzli');

gulp.task('default', () =>
    gulp.src(['src/**/*', '!src/optimised/**'])
        .pipe(imagemin([
            imageminGuetzli(),
            imagemin.optipng(),
            imagemin.gifsicle(),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest('src/optimised'))
);