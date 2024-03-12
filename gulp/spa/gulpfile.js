const {series}  = require('gulp')
const gulp  = require('gulp')
const concat  = require('gulp-concat')
const uglifycss  = require('gulp-uglifycss')
const uglify  = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'))

const {appHTML,appCSS,appJS,appIMG} = require('./gulpTasks/app')
const {depsCSS,depsFonts} = require('./gulpTasks/deps')
const {munitorarAquivos,servidor} = require('./gulpTasks/servidor')

module.exports.default = series(
    gulp.parallel(
        series(appHTML,appCSS,appJS,appIMG),
        series(depsCSS,depsFonts)
    ),
    servidor,
    munitorarAquivos
)
