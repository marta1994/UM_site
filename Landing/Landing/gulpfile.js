var gulp = require("gulp"),
    fs = require("fs"),
    less = require("gulp-less"),
    clean = require('gulp-clean');

gulp.task("clean", function () {
    return gulp.src('wwwroot/css/*.*', {read: false})
        .pipe(clean({ force: true }));
});

gulp.task("less", function () {
    return gulp.src(['Styles/*', 'Styles/Mobile/*', 'Styles/Desktop/*'])
        .pipe(less())
        .pipe(gulp.dest('wwwroot/css'));
});

gulp.task("build-styles", ["clean", "less"]);