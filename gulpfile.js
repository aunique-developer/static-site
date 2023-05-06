const gulp = require('gulp');

gulp.task('copy-html', function() {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./public'));
});

gulp.task('copy-css', function() {
  return gulp.src('./styles.css')
    .pipe(gulp.dest('./public'));
});

gulp.task('build', gulp.parallel('copy-html', 'copy-css'));
