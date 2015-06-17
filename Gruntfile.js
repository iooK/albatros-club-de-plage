module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            main: {
                options: {
                    //compress: true,
                    sourceMap: true,
                    sourceMapFilename: "dist/css/bootstrap-theme-custom.css.map",
                    sourceMapURL: '/dist/css/bootstrap-theme-custom.css.map'
                },
                // Preprocess css styles
                files: {
                    "dist/css/bootstrap-theme-custom.css": "src/less/bootstrap-custom.less"
                }
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            // Concat third party libs
            dist: {
                src: ['src/js/lib/**/*.js'],
                dest: 'dist/js/lib.js'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: false
            },
            // Uglify Angular app files
            main: {
                files: {
                    'dist/js/app.min.js': ['app/**/*.js']
                }
            }
        },

        copy: {
            // Copie images
            img: {
                expand: true,
                cwd: 'src/img/',
                src: '**',
                dest: 'dist/img/'
            },
            // Copie des fonts
            fonts: {
                expand: true,
                cwd: 'src/fonts/',
                src: '**',
                dest: 'dist/fonts/'
            }
        },

        // Empties dist directory
        clean: ["dist"],

        watch: {
            stylesheets: {
                files: ['src/less/**/*.less'],
                tasks: ['less']
            },
            app_scripts: {
                files: ['app/**/*.js', 'src/js/**/*.js'],
                tasks: ['uglify', 'copy']
            },
            images: {
                files: ['src/img/**'],
                tasks: ['copy']
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'less', 'copy']);

};