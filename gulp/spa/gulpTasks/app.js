const {series}  = require('gulp')
const gulp  = require('gulp')
const concat  = require('gulp-concat')
const uglifycss  = require('gulp-uglifycss')
const uglify  = require('gulp-uglify')
const htmlmin  = require('gulp-htmlmin')
const babel = require('gulp-babel')
const sass = require('gulp-sass')(require('sass'))

function appHTML(){
    return gulp.src('src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'))
}

function appCSS(){
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(uglifycss({"uglyComments":true}))// 
        .pipe(concat('app.min.css'))//
        .pipe(gulp.dest('build/assets/css'))

}

function appJS(){
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({
            comments:false,//tira comentario
            presets:["env"]//js mais novo            
        }))
        .pipe(uglify())//coloca tudo em uma linha só
        .pipe(concat('app.min.js'))//coloca tudo em um arquivo
        .pipe(gulp.dest('build/assets/js'))
}

function appIMG(){
    return gulp.src('src/assets/imgs/**/*.*')
    .pipe(gulp.dest('build/assets/imgs'))
}
gulp.task('appHTML', appHTML)
gulp.task('appIMG', appIMG)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)


module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}