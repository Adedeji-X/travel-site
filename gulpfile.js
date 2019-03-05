var gulp = require('gulp');
var watch = require('gulp-watch');
gulp.task('default', function() {
  console.log('hooray you created a gulp task');

});

gulp.task ('html', done => {
  console.log('trying out html');
  done();
})

gulp.task ('styles', done => {
  console.log('Css dey run');
  done();
})

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  });
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});
