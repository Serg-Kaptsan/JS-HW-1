const {src, dest} = require('gulp');

function move(){

    return src(['Reserve/*.html', 'Reserve/*.js']).pipe(dest('doc/'));
   }
   exports.move = move;

   const htmlmin = require('gulp-htmlmin');

   function minhtml(){
         return src('Reserve/*.html')
           .pipe(htmlmin({ collapseWhitespace: true }))
           .pipe(dest('doc/'));
       };
 
       exports.minhtml = minhtml;