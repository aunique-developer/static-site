const gulp = require('gulp');


gulp.task('copy-html', function() {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./public'))
    .pipe(gulp.dest('./docs'));
});

gulp.task('copy-ico', function() {
  return gulp.src('./aalogo.ico')
    .pipe(gulp.dest('./public'))
    .pipe(gulp.dest('./docs'));
});

gulp.task('copy-images', function() {
  return gulp.src('./aalogo.png')
    .pipe(gulp.dest('./public'))
    .pipe(gulp.dest('./docs'));
});

gulp.task('copy-css', function() {
  return gulp.src('./styles.css')
    .pipe(gulp.dest('./public'))
    .pipe(gulp.dest('./docs'));
});

gulp.task('build', gulp.parallel('copy-html', 'copy-css', 'copy-ico', 'copy-images'));
