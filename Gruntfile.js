module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: { 
                    'build/app.module.js': 'src/app.module.js',
                    'build/props.module.js': 'src/props.module.js'
                }
            }
        },

        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/', src: ['**'], dest: 'build/'},
                    {expand: true, cwd: 'lib/', src: ['**'], dest: 'build/'}
                ]
            }
        },

        compress: {
            main: {
                options: {
                    archive: 'dist/<%= pkg.name %>-v<%= pkg.version %>.tar.gz',
                    mode: 'tgz'
                },
                files: [
                    {expand: true, cwd: 'build/', src: ['**'], dest: '<%= pkg.name %>-v<%= pkg.version %>'}
                ]
            }
        },

        clean: {
            build: {
                src: ['build/*', 'dist/*']
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task(s).
    grunt.registerTask('default', ['copy']);

    grunt.registerTask('build', ['clean', 'copy', 'uglify', 'compress']);

};