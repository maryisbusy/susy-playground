function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

var gulp = require('gulp');

var sass = require('gulp-ruby-sass');  

var concat = require('gulp-concat');
var gutil = require('gulp-util');

var paths = {
  sass    : 'src/scss/**/*.scss',
  stylus  : 'src/stylus/**/*.styl',
  scripts : 'src/scripts/**/*.js',
  images  : 'src/imgs/**/*'
};

var prodPaths = {
  css    : 'build/css',
  js     : 'build/js',
  images : 'build/images'
};

gulp.task('sass-styles', function() {
    gulp.src(paths.sass)
        .pipe(sass())
        .pipe(concat('styles-sass.css'))
        .on('error',handleError)
        .pipe(gulp.dest(prodPaths.css));
});


// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass-styles']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['sass-styles',  'watch']);




