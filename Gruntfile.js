module.exports = function (grunt) {


	grunt.initConfig ({

		watch: {
		  css: {
		    files: 'src/css/*.css',
		    tasks: ['cssmin'],
		    options: {
		      livereload: true,
		    },
		  },
		},

		cssmin: {
		  // minify: {
		  //   expand: true,
		  //   cwd: 'src/css/',
		  //   src: ['*.css'],
		  //   dest: 'css/',
		  //   ext: '.min.css'
		  // }

		  target: {
		    files: {
		      'css/style.min.css': ['src/css/style.css', 'src/css/animations.css', 'src/css/media-queries.css']
		    }
		  }
		}


	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['watch', 'cssmin']);
};