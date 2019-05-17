const gulp= require('gulp')
var sass= require('gulp-sass')
function defaultTask(end) {
    console.log("ciao");
    end();
}

gulp.task("prova1",function(end){
    console.log("prova1");
    end();
})

gulp.task("prova2",function(end){
    console.log("prova2");
    end();
})

gulp.task("sass",function(end){
    return gulp.src('./style/style.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('./style'))
});

gulp.task("prova",gulp.series("prova1","prova2"))
exports.default= defaultTask;

