module.exports = function(grunt) { 'use strict';

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    clean: ['dist'],

    less: {
      development: {
        src: 'src/composer.less',
        dest: 'dist/composer.css'
      }
    },

    watch: {
      less: {
        files: ['**/*.less'],
        tasks: ['less']
      }
    }
  });

  grunt.registerTask('start', [
    'less',
    'watch'
  ]);

  grunt.registerTask('default', [
    'start'
  ]);
};
