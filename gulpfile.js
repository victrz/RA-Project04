var gulp = require("gulp");
var concat = require("gulp-concat");
var cleanCSS = require("gulp-clean-css");
var sass = require("gulp-sass");

gulp.task("kitty", function(){
  console.log("hello");
  return gulp.src("*.css")
  .pipe(concat("min.css"))
  .pipe(cleanCSS())
  .pipe(sass())
  .pipe(gulp.dest("./dist"));
});
