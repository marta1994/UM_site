var gulp = require("gulp"),
    fs = require("fs"),
    less = require("gulp-less"),
    clean = require("gulp-clean"),
    cleanCSS = require("gulp-clean-css"),
    rename = require("gulp-rename"),
    concat = require("gulp-concat"),
    minify = require("gulp-minify");

gulp.task("clean", function () {
    return gulp.src("wwwroot/css/*.*", {read: false})
        .pipe(clean({ force: true }));
});

gulp.task("less", function () {
    return gulp.src("Styles/main.less")
        .pipe(less())
        .pipe(gulp.dest("wwwroot/css"));
});

gulp.task("min-css", function () {
    return gulp.src(["wwwroot/css/*.css", "!wwwroot/css/*.min.css"])
        .pipe(cleanCSS())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("wwwroot/css"));
});

gulp.task("bundle-js", function () {
    return gulp.src("Scripts/**/*.js")
        .pipe(concat("site.js"))
        .pipe(gulp.dest("wwwroot/js/"));
});

gulp.task("min-js", function () {
    gulp.src("wwwroot/js/site.js")
        .pipe(minify())
        .pipe(rename("site.min.js"))
        .pipe(gulp.dest("wwwroot/js/"))
});

gulp.task("build-styles", ["clean", "less", "min-css"]);

gulp.task("build-js", ["bundle-js", "min-js"]);