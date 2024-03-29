const gulp  = require('gulp')
const webserver  = require('gulp-webserver')
const watch  = require('gulp-watch')



function munitorarAquivos(){
    return gulp.src('build')
        .pipe(webserver({
            port:8080,
            open:true,
            livereload:true
        }))
        
}


function servidor(cb){
    watch('src/**/*.html',()=>gulp.series('appHTML')())
    watch('src/**/*.scss',()=>gulp.series('appCSS')())
    watch('src/assets/img/**/*.*',()=>gulp.series('appIMG')())
    watch('src/**/*.js',()=>gulp.series('appJS')())
    return cb()
}

module.exports = {
    munitorarAquivos,
    servidor
}