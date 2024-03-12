const {series}  = require('gulp')
const gulp  = require('gulp')
const concat  = require('gulp-concat')
const uglify  = require('gulp-uglify')
const babel = require('gulp-babel')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function tranformacaoTS(){
    return tsProject.src()
        .pipe(tsProject())
        .pipe(uglify())// 
        .pipe(concat('teste.min.js'))//
        .pipe(gulp.dest('build'))
}

exports.default = series(tranformacaoTS)