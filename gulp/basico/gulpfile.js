const gulp = require('gulp')
const series = gulp.series//const {series} = require('gulp')

const antes1 = cb =>{
    console.log('antes1')

    return cb()
}
const antes2 = cb =>{
    console.log('antes2')

    return cb()
}

function copiar(cb){

    
    gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB'))//pipe é uma seria de tranformação que pode ser chamada
            //dest fala pra qual pasta quer que seja mandado

    return cb()
}

const fim = cb =>{
    console.log('fim')

    return cb()
}
module.exports.default = series(
    gulp.parallel(
        antes1,
        antes2
        ),
    copiar,
    fim)