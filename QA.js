var gulp = require('gulp'); // administrar tareaas
var webserver = require('gulp-webserver'); // administrear el servidopr
var opn = require('opn');//abrir el navegador
var  phantom  =  require("gulp-phantom");
var casperJs = require('gulp-casperjs');

var server = {
    host: 'localhost', // nombre del host
    port: '8001' // puerto
}

gulp.task('webserver', function(){

    gulp.src('app') // busca la carpeta
    .pipe(webserver({
        host: server.host,
        port: server.port,
        livereload: true,
        directoryListing: false
    })); // tarea de definirle
});

gulp.task('openbrowser', function () {
    opn('http://' + server.host + ':' + server.port);
});// abrir el navegador


gulp.task('watch', function () {
    gulp.watch('app/*.html');
    gulp.watch('app/css/*.css');
});// tarea watch para ver/mostrar los cambios


gulp.task('default', ['webserver', 'watch', 'openbrowser'])