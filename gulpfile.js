var gulp  = require('gulp');
//var path = require('path');

var autoprefixer    = require('gulp-autoprefixer');
var concat          = require('gulp-concat');
var extend          = require('gulp-extend');
var header          = require('gulp-header');
var less            = require('gulp-less');
var minifyCSS       = require('gulp-minify-css');
//var ngConstant    = require('gulp-ng-constant');
var rename          = require('gulp-rename');
var sourcemaps      = require('gulp-sourcemaps');
var uglify          = require('gulp-uglify');
var util            = require('gulp-util');

// definition of environment type
util.env.type = (util.env.type === undefined) ? 'dev' : util.env.type;
util.log('Environment: ' + util.env.type + ' (you can change with --type=(dev|prod|...) parameter)');

var bower = require(__dirname + '/bower.json');
var banner = ['/**',
    ' * <%= bower.name %> - <%= bower.description %>',
    ' * @version v<%= bower.version %>',
    ' * @link <%= bower.homepage %>',
    ' * @license <%= bower.license %>',
    ' */',
    ''].join('\n');

// compile less
gulp.task('less', function() {
    return gulp.src(__dirname + '/src/less/main.less')
        .pipe((util.env.type === 'dev') ? sourcemaps.init() : util.noop())
        .pipe(less())                                                           // paths: [path.join(__dirname)]
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe((util.env.type === 'dev') ? sourcemaps.write() : util.noop())
        .pipe((util.env.type !== 'dev') ? minifyCSS() : util.noop())
        .pipe(rename(bower.name + '.css'))
        .pipe(gulp.dest(__dirname + '/web/dist/css'));
});

gulp.task('copy_app', function() {
    return gulp.src([
            __dirname + '/src/app/**/*.html',
            __dirname + '/src/app/**/*.json'
        ], {
            'base' : __dirname + '/src/app'
        })
        .pipe(gulp.dest(__dirname + '/web/dist/app'));
});

gulp.task('copy_other', function() {
    return gulp.src([
            __dirname + '/src/font/**/*',
            __dirname + '/src/icon/**/*',
            __dirname + '/src/img/**/*'
        ], {
            'base' : __dirname + '/src'
        })
        .pipe(gulp.dest(__dirname + '/web/dist'));
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
    return gulp.src([__dirname + '/src/app/app.js', __dirname + '/src/app/**/*.js'])
        .pipe((util.env.type === 'dev') ? sourcemaps.init() : util.noop())
        .pipe(concat('app.js'))
        .pipe((util.env.type !== 'dev') ? uglify() : util.noop())
        .pipe((util.env.type === 'dev') ? sourcemaps.write() : util.noop())
        .pipe(header(banner, { bower : bower } ))
        .pipe(gulp.dest(__dirname + '/web/dist/js'));
});


// compile js libraries
gulp.task('lib', function() {
    return gulp.src(__dirname + '/src/js/**/*.js')
        .pipe(concat('app.lib.js'))
        .pipe(gulp.dest(__dirname + '/web/dist/js'));
});

// default task
gulp.task('default', ['less', 'app', 'lib', 'copy_app', 'copy_other'], function () {

    util.log('Watching for files in app for copy');
    gulp.watch([
        __dirname + '/src/app/**/*.html',
        __dirname + '/src/app/**/*.json'
    ], ['copy_app']);

    //util.log('Watching for files in parameters for constant');
    //gulp.watch(['./config/**/parameters.json'], ['constant']);

    util.log('Watching for other files in app for copy');
    gulp.watch([
        __dirname + '/src/font/**/*',
        __dirname + '/src/icon/**/*',
        __dirname + '/src/img/**/*'
    ], ['copy_other']);

    util.log('Watching for Less');
    gulp.watch(__dirname + "/src/less/**/*.less", ['less']);

    util.log('Watching for JS app');
    gulp.watch(__dirname + "/src/app/**/*.js", ['app']);

    util.log('Watching for JS lib');
    gulp.watch(__dirname + "/src/js/**/*.js", ['lib']);
});
