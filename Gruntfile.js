module.exports = function(grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //less: {
        //    main: {
        //        options: {
        //            //compress: true,
        //            sourceMap: true,
        //            sourceMapFilename: "dist/css/bootstrap-theme-custom.css.map",
        //            sourceMapURL: '/dist/css/bootstrap-theme-custom.css.map'
        //        },
        //        // Preprocess css styles
        //        files: {
        //            "dist/css/bootstrap-theme-custom.css": "src/less/bootstrap-custom.less"
        //        }
        //    }
        //},

        // Empties dist directory
        clean: {
            dist: 'dist',
            docs: 'docs/dist'
        },

        less: {
            compileCore: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: '<%= pkg.name %>.css.map',
                    sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
                },
                src: 'src/less/main.less',
                dest: 'dist/css/<%= pkg.name %>.css'
            }
        },

        //concat: {
        //    options: {
        //        separator: ';'
        //    },
        //    // Concat third party libs
        //    dist: {
        //        src: ['src/js/lib/**/*.js'],
        //        dest: 'dist/js/lib.js'
        //    }
        //},
        //
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: false,
                sourceMap: true
            },
            main: {
                files: {
                    'dist/js/app.min.js': ['app/app.js', 'app/**/*.js']
                }
            }
        }
        //
        //copy: {
        //    // Copie images
        //    img: {
        //        expand: true,
        //        cwd: 'src/img/',
        //        src: '**',
        //        dest: 'dist/img/'
        //    },
        //    // Copie des fonts
        //    fonts: {
        //        expand: true,
        //        cwd: 'src/fonts/',
        //        src: '**',
        //        dest: 'dist/fonts/'
        //    }
        //},
        //
        //watch: {
        //    stylesheets: {
        //        files: ['src/less/**/*.less'],
        //        tasks: ['less']
        //    },
        //    app_scripts: {
        //        files: ['app/**/*.js', 'src/js/**/*.js'],
        //        tasks: ['uglify', 'copy']
        //    },
        //    images: {
        //        files: ['src/img/**'],
        //        tasks: ['copy']
        //    }
        //}
    });

    // Load the plugin that provides the "uglify" task.
    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
    require('time-grunt')(grunt);

    // Default task(s).
    grunt.registerTask('default', ['clean:dist', 'less:compileCore', 'uglify']);

};