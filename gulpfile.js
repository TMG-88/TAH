var gulp = require('gulp');
var sass = require('gulp-sass');
var sasslint = require('gulp-sass-lint');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var header = require('gulp-header');

var pkg = require('./package.json');
var banner = '/*! <%= pkg.name %>: v.<%= pkg.version %>, last updated on: <%= new Date() %> */\n';

///////////////////////////////////
// Build Tasks
///////////////////////////////////





///////////////////////////////////
// Development Tasks
///////////////////////////////////

gulp.task('styles:dev', function() {
  return gulp.src('./scss/**/*.s+(a|c)ss')
    .pipe(sasslint({configFile: '.ubs-sass-lint.yml'}))              
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError(false))   
    .pipe(sourcemaps.init())                                           
    .pipe(sass({outputStyle: 'expanded'}))
    //.pipe(rename({extname: '.dev.css'}))
    .pipe(header(banner, {pkg : pkg}))
    .pipe(sourcemaps.write('.')) 
    .pipe(gulp.dest('./css'))
    //.pipe(notify(notifyMsg));
});

gulp.task('default', ['styles:dev']);