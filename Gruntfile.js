module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      basic_and_extras: {
        files: {
          'js/build/output.min.js': ['js/src/script.js', 'js/src/slider.js', 'js/src/jquery.simpleslider.package.min.js'],
          'styles/build/main.scss': ['styles/src/*.scss'],
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/build/output.min.js': ['js/build/output.min.js'],
        }
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['build/main.scss'],
          dest: 'styles',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['styles/src/*.scss'],
      tasks: ['concat', 'uglify', 'sass'],
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'sass']);
  // grunt.registerTask('watch', ['watch']);

};