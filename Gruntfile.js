module.exports = function (grunt) {


	grunt.initConfig ({

		watch: {
		  src: {
	      files: ['src/styl/*.styl'],
	      tasks: ['stylus'],
	    },
		},

		// configurar daqui pra baixo
		stylus: {
			options: {
				compress: false
			},
		  compile: {
		    files: {
		      'css/style.css': ['src/styl/main.styl'] // compile and concat into single file
		    },
		  },
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.registerTask('default', ['watch', 'stylus']);
};