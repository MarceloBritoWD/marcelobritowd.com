module.exports = function (grunt) {


	grunt.initConfig ({

		cssmin: {
		  minify: {
		    expand: true,
		    cwd: 'css/',
		    src: ['style.css'],
		    dest: 'css/',
		    ext: '.min.css'
		  }
		}


		'string-replace': {
		  inline: {
		    files: {
		      'css/': 'css/**',
		    },
		    options: {
		      replacements: [
		        // place files inline example
		        {
		          pattern: '<link rel="stylesheet" href="css/style.css">',
		          replacement: '<link rel="stylesheet" <%= grunt.file.read('css/style.min.css') %>'
		        }
		      ]
		    }
		  }
		}



	});

	grunt.loadNpmTasks('grunt-contrib-cssmin', 'grunt-string-replace');
	grunt.registerTask('default', ['cssmin', 'string-replace']);


};
