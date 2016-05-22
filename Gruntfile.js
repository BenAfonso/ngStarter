module.exports = function(grunt) {
  grunt.initConfig({

    /*******************
    * JAVASCRIPT TASKS
    ********************/
    // Check all js files
    jshint: {
        all: ['public/js/**/*.js']
    },
    // Minify all the js files in app.min.js
    uglify: {
        options: {
            mangle: false
        },
        build: {
            files: {
                'public/dist/js/app.min.js': ['public/js/*.js', 'public/js/**/*.js']
            }
        }
    },

    /*******************
    *     CSS TASKS
    ********************/

    // Compile Sass
    sass: {
      dist: {
          style: 'expanded',
          files: {
            'public/styles/style.css': 'public/styles/sass/style.sass'
          }
      }
    },

    // Minify the processed style.css
    cssmin: {
        build: {
            files: {
                'public/dist/css/style.min.css': ['public/styles/style.css']
            }
        }
    },

    watch: {
      html: {
        options: {livereload: true},
        files: ['**/*.html']
      },
      css: {
        options: {livereload: true},
        files: ['**/*.sass','**/*.scss'],
        tasks: ['sass', 'cssmin']
      },
      js: {
          options: {livereload: true},
          files: ['public/js/**/*.js'],
          tasks: ['jshint', 'uglify']
      }

    },


    // Configuring nodemon
    nodemon: {
      dev: {
          script: 'index.js'
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    }

  });

  // Load nodemon
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Register the nodemon task when we run grunt
  grunt.registerTask('build', ['jshint', 'uglify', 'sass', 'cssmin'])
  grunt.registerTask('default', ['sass', 'concurrent']);
  grunt.registerTask('deploy', ['nodemon']);


};
