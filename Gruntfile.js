module.exports = function(grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    // User external for config
    var configBridge = grunt.file.readJSON('./Gruntconfig.json', { encoding: 'utf8' });

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Empties dist directory
        clean: {
            dist: 'dist'
        },


        // grunt less file
        less: {
            core: {
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
        autoprefixer: {
            options: {
                browsers: configBridge.config.autoprefixerBrowsers
            },
            core: {
                options: {
                    map: true
                },
                src: 'dist/css/<%= pkg.name %>.css'
            }
        },
        csscomb: {
            options: {
                config: 'src/less/.csscomb.json'
            },
            dist: {
                expand: true,
                cwd: 'dist/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/css/'
            }
        },

        // grunt js file
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
            core: {
                files: {
                    'dist/js/app.min.js': ['app/app.js', 'app/**/*.js']
                }
            }
        },

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

        // test
        csslint: {
            options: {
                csslintrc: 'src/less/.csslintrc'
            },
            dist: [
                'dist/css/<%= pkg.name %>.css'
            ]
        }
    });

    // Load the plugin that provides the "uglify" task.
    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
    require('time-grunt')(grunt);

    // Default task(s).
    grunt.registerTask('default', [
        'clean:dist',
        'less:core',
        'autoprefixer:core',
        'uglify:core',
        'csscomb:dist'
    ]);

    grunt.registerTask('test', ['csslint:dist']);
};
