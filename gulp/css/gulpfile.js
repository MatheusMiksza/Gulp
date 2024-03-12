const {series}  = require('gulp')
const gulp  = require('gulp')
const concat  = require('gulp-concat')
const uglifycss  = require('gulp-uglifycss')
const sass = require('gulp-sass')(require('sass'));

function tranformacaoCSS(){
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(uglifycss({"uglyComments":true}))// 
        .pipe(concat('estilo.min.css'))//
        .pipe(gulp.dest('build/css'))
}
function tranformacaoHTML(){
    return gulp.src('src/index.html')
        .pipe(concat('index.min.html'))//
        .pipe(gulp.dest('build'))
}

exports.default = gulp.parallel([tranformacaoCSS, tranformacaoHTML])