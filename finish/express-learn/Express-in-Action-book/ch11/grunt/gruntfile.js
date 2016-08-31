module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            main: {
                options: {
                    paths: ['css']
                },
                // Tells the Grunt LESS plugin to compile my_css/main.less into tmp/build/main.css
                files: {
                    'tmp/build/main.css': 'css/main.less'
                }
            }
        },
        browserify: {
            client: {
                src: ['js/common.js'],
                dest: 'tmp/build/common.js'
            }
        },
        uglify: {
            myApp: {
                files: {
                    'tmp/build/common.min.js': ['tmp/build/common.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: ['browserify']
            },
            styles: {
                files: ['**/*.css'],
                tasks: ['less']
            }
        }
    })

    // grunt.registerTask('default', 'say Hello World', function() {
    //     grunt.log.write('Hello world!');
    // });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['browserify', 'less']);
    grunt.registerTask('build', ['browserify', 'less', 'uglify']);
};
