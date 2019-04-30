module.exports = function(grunt) {
    grunt.initConfig ({
        pkg:grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'dist/css/style.css' : 'sass/style.scss'
                }
            }
        },
        cssmin: {
            minify: {
                src:'dist/css/style.css',
                dest: 'dist/css/minified/style.min.css'
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'dist/css/minified/style.min.css',
                        'dist/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: 'dist/./'
                }
            }
        },
        watch: {
            css: {
                files: 'sass/style.scss',
                files: ['sass/partials/*.scss'],
                tasks: ['sass', 'cssmin']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['browserSync','watch']);
}