const {src, dest} = require('gulp');

function move(){

    return src(['Reserve/*.html', 'Reserve/*.js']).pipe(dest('doc/'));
   }
   exports.move = move;