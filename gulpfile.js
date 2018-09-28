var gulp = require('gulp');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var stream = require('stream-series');

gulp.task('default', () =>{
    console.log("default gulp-task");
});

gulp.task('collect-js', () => {
    return gulp.src(['./controllers/*.js','./directives/*.js'])
    .pipe(gulp.dest('./js/'));
});

gulp.task('inject-js',['collect-js'], () => {
    var target = gulp.src('./index.html');
    var sources = gulp.src(['./node_modules/angular/angular.min.js','./node_modules/angular-route/angular-route.min.js','./app.module.js','./app.config.js','./js/*.js',]);
    
    return target.pipe(inject(stream(sources))).pipe(gulp.dest('./'));
});

gulp.task('collect-css', () => {
    return gulp.src('./*.css')
    .pipe(gulp.dest('./css/'));
});

gulp.task('inject-css',['collect-css'], () => {
    var target = gulp.src('./index.html');
    var sources = gulp.src('./css/*.css');
    
    return target.pipe(inject(sources)).pipe(gulp.dest('./'));
});

gulp.task('injection',['inject-css','inject-js']);