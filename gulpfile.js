'use strict';

var gulp = require('gulp');
var HubRegistry = require('gulp-hub');
var deploy = require('gulp-gh-pages');

/* load some files into the registry */
var hub = new HubRegistry('gulp/**/*.js');

/* tell gulp to use the tasks just loaded */
gulp.registry(hub);

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
    return gulp.src("./dist/**/*")
      .pipe(deploy())
  });
