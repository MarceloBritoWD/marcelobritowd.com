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

	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['cssmin']);


};
