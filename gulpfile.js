var gulp  = require('gulp');

var autoprefixer    = require('gulp-autoprefixer');
var concat          = require('gulp-concat');
var connect         = require('gulp-connect');
var header          = require('gulp-header');
var less            = require('gulp-less');
var cleanCss        = require('gulp-clean-css');
var rename          = require('gulp-rename');
var sourcemaps      = require('gulp-sourcemaps');
var uglify          = require('gulp-uglify');
var util            = require('gulp-util');

// definition of environment type
util.env.env = (typeof util.env.env === 'undefined') ? 'dev' : util.env.env;
util.log('Environment: ' + util.env.env + ' (you can change with --env=(dev|prod|...) parameter)');

var bower = require('./bower.json');
var banner = [
    '/**',
    ' * <%= bower.name %> - <%= bower.description %>',
    ' * @version v<%= bower.version %>',
    ' * @link <%= bower.homepage %>',
    ' * @license <%= bower.license %>',
    ' */',
    '',
].join('\n');

// compile less
gulp.task('less', function (done) {
    gulp
        .src('./src/less/main.less')
        .pipe((util.env.env === 'dev') ? sourcemaps.init() : util.noop())
        .pipe(less())                                                           // paths: [path.join(__dirname)]
        .pipe(autoprefixer({
            'browsers': ['last 2 versions'],
            'cascade': false,
        }))
        .pipe(cleanCss())
        .pipe((util.env.env === 'dev') ? sourcemaps.write() : util.noop())
        .pipe(rename(bower.name + '.css'))
        .pipe(gulp.dest(__dirname + '/web/dist/css'))
        .on('end', done);
});

gulp.task('copy_app', function (done) {
    gulp
        .src([
            __dirname + '/src/app/**/*.html',
            __dirname + '/src/app/**/*.json',
        ], {
            'base' : './src/app',
        })
        .pipe(gulp.dest('./web/dist/app'))
        .on('end', done);
});

gulp.task('copy_other', function (done) {
    gulp
        .src([
            './src/font/**/*',
            './src/icon/**/*',
            './src/img/**/*',
        ], {
            'base': './src',
        })
        .pipe(gulp.dest('./web/dist'))
        .on('end', done);
});

// compile angular application
gulp.task('app', function () {
    return gulp.src(['./src/app/app.js', './src/app/**/*.js', './src/js/**/*.js'])
        .pipe((util.env.env === 'dev') ? sourcemaps.init() : util.noop())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe((util.env.env === 'dev') ? sourcemaps.write() : util.noop())
        .pipe(header(banner, { 'bower': bower } ))
        .pipe(gulp.dest('./web/dist/js'));
});

// default task
gulp.task('default', ['less', 'app', 'copy_app', 'copy_other']);


gulp.task('watch', ['default'], function () {
    gulp.watch([
        './src/app/**/*.html',
        './src/app/**/*.json',
    ], ['copy_app']);

    gulp.watch([
        './src/font/**/*',
        './src/icon/**/*',
        './src/img/**/*',
    ], ['copy_other']);

    gulp.watch([
        './src/less/**/*.less',
    ], ['less']);

    gulp.watch('./src/app/**/*.js', [
        'app',
    ]);
});

// connect local server
gulp.task('connect', function () {
    connect.server({
        'root': 'web',
        'port': 9000,
        'fallback': 'index.html',
    });
});
