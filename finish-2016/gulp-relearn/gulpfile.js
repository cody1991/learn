var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    minifyCSS = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    del = require('del'),
    runSequence = require('run-sequence');

// http://www.w3ctrain.com/2015/12/22/gulp-for-beginners/ 教程地址

// gulp.task('task-name', function() {

// });


gulp.task('hello', function() {
    console.log('Hello world');
});

// gulp.task('task-name',function(){
// 	return gulp.src('source_files')
// 			.pipe(aGulpPlugin())
// 			.pipe(gulp.dest('destination'));
// });

// gulp.task('sass', function() {
//     return gulp.src('source_files')
//         .pipe(sass())
//         .pipe(gulp.dest('destination'));
// });

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// <!-- build:<type> <path> -->
// 	... HTML Markup, list of script / link tags.
// <!-- endbuild -->
gulp.task('useref', function() {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.css', minifyCSS()))
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
    return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('clean', function(callback) {
    del('dist');
    return cache.clearAll(callback);
});

gulp.task('clean:dist', function(callback) {
    del(['dist/**/*', '!dist/images', '!dist/images/**/*'], callback);
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        }
    })
});

gulp.task('watch', ['browserSync', 'sass', ], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);

    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

// gulp.task('build', ['clean:dist', 'sass', 'useref', 'images'], function() {

//     console.log('Building files');
// });
gulp.task('build', function(callback) {
    runSequence('clean:dist', ['sass', 'useref', 'images'], callback);
});

gulp.task('default', function(callback) {
    runSequence(['sass', 'browserSync', 'watch'], callback);
});

// *.scss *号匹配当前目录任意文件，所以这里*.scss匹配当前目录下所有scss文件
// **/*.scss 匹配当前目录及其子目录下的所有scss文件
// !not-me.scss ！号移除匹配的文件，这里将移除not-me.scss
// *.+(scss|sass) +号后面会跟着圆括号，里面的元素用|分割，匹配多个选项。这里将匹配scss和sass文件。

// gulp.watch('files-to-watch', ['tasks', 'to', 'run']);

// gulp.task('watch',['array','of','tasks','to','complete','before','watch'],function(){});

// gulp.task('task-name', function(callback) {
//     runSequence('task-one', 'task-two', 'task-three', callback);
// runSequence('task-one', ['tasks','two','run','in','parallel'], 'task-three', callback);
// })
