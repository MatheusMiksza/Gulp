const {series}  = require('gulp')
const gulp  = require('gulp')
const concat  = require('gulp-concat')
const uglify  = require('gulp-uglify')
const babel = require('gulp-babel')

function tranformacaoJS(cb){
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments:false,//tira comentario
            presets:["env"]//js mais novo            
        }))
        .pipe(uglify())//coloca tudo em uma linha só
        .pipe(concat('codigo.min.js'))//coloca tudo em um arquivo
        .pipe(gulp.dest('build'))


    return cb()
}

module.exports.default = series(tranformacaoJS)
