'use strict'

const browserSync = require('browser-sync');
var gulp = require('gulp');
    sass = require('gulp-sass');
    browserSync = require('browser-sync');
    imagemin = require('gul´p-imagemin');
    usemin = require('gulp-usemin');
    rev = require('gulp-re');
    cleanCss= require('gulp-clean-css');
    flatmap=('gulp-flatmap');
    htmlmin = require('gulp-htmlmin');

gulp.task('sass', function(){
    gulp.src('./css/*.scss')
           .pipe(sass().on('error', sass.logError))
           .pipe(gulp.dest('./css');
});


gulp.task('sass:watch', function(){
    gulp.watch('./css/*.scss', ['sass']);
});

gulp.task('browser-sync', function(){
    var files = ['./*.html','./css/*.css', './img/*.{png, jpg, gif}', './js/*.js']
    browserSync.init(files,{
        server:{
            baseDir: './'
        }
    });
});

gulp.task('default', ['browser-sync'], function(){
    gulp.setMaxListeners('sass:watch'); 
});

gulp.task('clean' , function(){
    return del(['dist']);
})

gulp.task('imagemin', function(){
    return gulp.src('./img/*.{png, jpg, jpeg, gif}')
          .pipe(imagemin({optimizationLevel: 3, progressive: true, intercalaced: true}))
          .pipe(gulp.dest('dist/img');
       
});


gulp.task( 'usemin', function(){
    return gulp.src('./*.html')
        .pipe(flatmap(function(stream, file){
            return stream
            .pipe(usemin({
                css: [rev()],
                html: [function(){ return htmlmin({collapseWhitespace: true})}],
                js: [uglify(), rev()],
                inlinejs: [uglify()],
                inlinecss: [cleanCss(), 'concat']
            }));
       
        }))
        .pipe(gulp.dest('dist/')); 
});

gulp.task('build', ['clean'], function(){
    gulp.start('imagenmin', 'usemin');
});