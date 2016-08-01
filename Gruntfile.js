module.exports = function (grunt) {


	grunt.initConfig ({

		watch: {
		  src: {
	      files: ['src/styl/*.styl'],
	      tasks: ['stylus'],
	    },

	    scripts: {
		    files: ['src/js/*.js'],
		    tasks: ['uglify'],
		    options: {
		      spawn: false,
		    },
		  },
		},

		// configurar daqui pra baixo
		stylus: {
			options: {
				compress: true
			},
		  compile: {
		    files: {
		      'resources/css/style.min.css': ['src/styl/main.styl'] // compile and concat into single file
		    },
		  },
		},

		uglify: {
	    my_target: {
	      files: {
	        'resources/js/functions.min.js': ['src/js/functions.js', 'src/js/analytics.js']
	      }
	    }
	  }

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['watch', 'stylus', 'uglify']);
};
