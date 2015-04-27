var gulp = require('gulp'),
    traceur = require('gulp-traceur'),
    babel = require('gulp-babel'),
    plumber = require('gulp-plumber'),
    browserify = require('browserify'),
    sourcePath = 'src/js/**/*.js',
    distPath = 'dist/js';

gulp.task('traceur', function () {
    gulp.src([sourcePath])
        .pipe(plumber())
        .pipe(traceur({blockBinding:true}))
        .pipe(gulp.dest(distPath + '/traceur'));
});

gulp.task('babel', function () {
    gulp.src([sourcePath])
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest(distPath + '/babel'));
});

gulp.task('watch', function () {
    gulp.watch([sourcePath], ['traceur', 'babel']);
});

gulp.task('browserify', function () {
    return browserify({
        debug: true
    })
    .require('./src/js/index.js', {
        entry: true
    })
    .bundle()
    .on('error', function (err) {
        console.error(err.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./bundle.js'));
});

gulp.task('default', ['traceur', 'babel', 'watch']);
