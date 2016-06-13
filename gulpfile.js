var gulp  = require('gulp');
//var path = require('path');

var autoprefixer    = require('gulp-autoprefixer');
var concat          = require('gulp-concat');
var connect         = require('gulp-connect');
var extend          = require('gulp-extend');
var header          = require('gulp-header');
var less            = require('gulp-less');
var cleanCss        = require('gulp-clean-css');
//var ngConstant    = require('gulp-ng-constant');
var rename          = require('gulp-rename');
var sourcemaps      = require('gulp-sourcemaps');
var uglify          = require('gulp-uglify');
var util            = require('gulp-util');

// definition of environment type
util.env.type = (util.env.type === undefined) ? 'dev' : util.env.type;
util.log('Environment: ' + util.env.type + ' (you can change with --type=(dev|prod|...) parameter)');

var bower = require('./bower.json');
var banner = ['/**',
    ' * <%= bower.name %> - <%= bower.description %>',
    ' * @version v<%= bower.version %>',
    ' * @link <%= bower.homepage %>',
    ' * @license <%= bower.license %>',
    ' */',
    ''].join('\n');

// compile less
gulp.task('less', function(done) {
    gulp
        .src('./src/less/main.less')
        .pipe((util.env.type === 'dev') ? sourcemaps.init() : util.noop())
        .pipe(less())                                                           // paths: [path.join(__dirname)]
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCss())
        .pipe((util.env.type === 'dev') ? sourcemaps.write() : util.noop())
        .pipe(rename(bower.name + '.css'))
        .pipe(gulp.dest(__dirname + '/web/dist/css'))
        .on('end', done);
});

gulp.task('copy_app', function(done) {
    gulp
        .src([
            __dirname + '/src/app/**/*.html',
            __dirname + '/src/app/**/*.json'
        ], {
            'base' : './src/app'
        })
        .pipe(gulp.dest('./web/dist/app'))
        .on('end', done);
});

gulp.task('copy_other', function(done) {
    gulp
        .src([
            './src/font/**/*',
            './src/icon/**/*',
            './src/img/**/*'
        ], {
            'base': './src'
        })
        .pipe(gulp.dest('./web/dist'))
        .on('end', done);
});

// make configuration
//gulp.task('constant', function() {
//    return  gulp.src(['./config/parameters.json', './config/' + util.env.type + '/parameters.json'])
//        .pipe(extend('app.constant.js'))
//        .pipe(ngConstant({
//            name: 'webApp',
//            deps: false,
//            wrap: '(function() {\n\'use strict\';\n\n<%= __ngModule %>\n})();'
//        }))
//        .pipe(gulp.dest('./web/dist/js'));
//});

// compile angular application
gulp.task('app', function() {
    return gulp.src(['./src/app/app.js', './src/app/**/*.js', './src/js/**/*.js'])
        .pipe((util.env.type === 'dev') ? sourcemaps.init() : util.noop())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe((util.env.type === 'dev') ? sourcemaps.write() : util.noop())
        .pipe(header(banner, {bower: bower } ))
        .pipe(gulp.dest('./web/dist/js'));
});


// compile js libraries
// gulp.task('lib', function() {
//     return gulp.src('./src/js/**/*.js')
//         .pipe(concat('app.lib.js'))
//         .pipe(gulp.dest(__dirname + '/web/dist/js'));
// });

// default task
gulp.task('default', ['less', 'app', 'copy_app', 'copy_other'], function () {

    gulp.watch([
        './src/app/**/*.html',
        './src/app/**/*.json'
    ], ['copy_app']);

    //util.log('Watching for files in parameters for constant');
    //gulp.watch(['./config/**/parameters.json'], ['constant']);

    gulp.watch([
        './src/font/**/*',
        './src/icon/**/*',
        './src/img/**/*'
    ], ['copy_other']);

    gulp.watch([
        './src/less/**/*.less'
    ], ['less']);

    gulp.watch('./src/app/**/*.js', [
        'app'
    ]);

    // gulp.watch('./src/js/**/*.js', [
    //     'lib'
    // ]);
});

// connect local server
gulp.task('connect', function() {
    connect.server({
        root: 'web',
        port: 9000,
        fallback: 'index.html'
    });
});
