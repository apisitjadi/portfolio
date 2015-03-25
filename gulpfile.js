var gulp = require('gulp');
var browserSync = require('browser-sync');


gulp.task('browser-sync', function() {
	var config = {
		server: {
			baseDir: "./"
		},
		port: 8899
	};
	browserSync(config);
});

gulp.task('default', ['browser-sync'],function(){
	gulp.watch(['*.html'], browserSync.reload);
	gulp.watch(['*.less'], browserSync.reload);
});