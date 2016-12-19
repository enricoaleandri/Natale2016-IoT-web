/**
 * Created by enricoaleandri on 19/11/16.
 */
var gulp = require('gulp');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
var bowerFiles = require('main-bower-files');
var util = require('gulp-util');

gulp.task('inject', function () {

  var target = gulp.src('./views/partials/header.ejs');
  // It's not necessary to read the files (will speed up things), we're only after their paths:

  return target
    .pipe(inject(gulp.src(bowerFiles(), {read: false}), {
      name: 'bower',
      addRootSlash : false,
        //ignorePath : 'src/main/webapp',
        transform : function ( filePath, file, i, length ) {
      var newPath = filePath.replace( 'public/', '' );
      return inject.transform.apply(inject.transform, [ newPath, file, i, length]);
    }
  }))
    .pipe(inject(
        gulp.src(['./public/app/**/*.js']).pipe(angularFilesort()),{
        addRootSlash : false,
        //ignorePath : 'src/main/webapp',
        transform : function ( filePath, file, i, length ) {
          var newPath = filePath.replace( 'public/', '' );
          return inject.transform.apply(inject.transform, [ newPath, file, i, length]);
        }
      }))
    .pipe(inject(
        gulp.src(['./public/stylesheets/**/*.css']),{
        addRootSlash : false,
        //ignorePath : 'src/main/webapp',
        transform : function ( filePath, file, i, length ) {
          var newPath = filePath.replace( 'public/', '' );
          return inject.transform.apply(inject.transform, [ newPath, file, i, length]);
        }
      }))
    .pipe(gulp.dest('./views/partials/'));
});


gulp.task('build', ['inject']);