var gulp = require('gulp'),
    mainNpmFiles = require('gulp-main-npm-files'),
    sass = require('gulp-sass');
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    server = require('gulp-server-livereload');

var config = {
    sassPath: 'styles/',
    jsPath: 'scripts/'
}

gulp.task('setpj', function() {

   console.log('set Boostsrapt3 work');

    gulp.src(mainNpmFiles({ dependencies: true }), { base:'./node_modules' }) 
    .pipe(gulp.dest(config.jsPath)); 

    gulp.src(['node_modules/bootstrap-sass/assets/stylesheets/**'])
    .pipe(gulp.dest(config.sassPath));    
    
    gulp.src(['node_modules/bootstrap-sass/assets/fonts/**'])
    .pipe(gulp.dest('fonts'));

    gulp.src(['node_modules/bootstrap-sass/assets/images/**'])
    .pipe(gulp.dest('images'));  

});

gulp.task('min-js', function () {
    gulp.src([ config.jsPath + '**/*.js','!**/*.min.js' ])
        .pipe(uglify())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest(config.jsPath));

});

gulp.task('sass', function () {
  return gulp.src(config.sassPath+'/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.sassPath));
});
 
gulp.task('min-css', function () {
    gulp.src([ config.sassPath +'**/*.css', '!**/*.min.css'])
        .pipe(minifyCSS())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest(config.sassPath));
        
});

gulp.task('sass:watch', function () {
  gulp.watch(config.sassPath+ '/**/*.scss', ['sass','min-css']);
});
gulp.task('webserver', ['sass:watch'], function () {
  gulp.src('.')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('default', function () {
    gulp.start('webserver');
});