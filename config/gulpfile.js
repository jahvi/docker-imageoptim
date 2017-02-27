var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('default', () =>
    gulp.src(['src/**/*', '!src/optimised/**'])
        .pipe(imagemin())
        .pipe(gulp.dest('src/optimised'))
);