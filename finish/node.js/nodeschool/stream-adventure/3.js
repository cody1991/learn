var through2 = require('through2');
// process.stdin.pipe(through2(function(buffer,encoding,next){

// }))

// var stream = through2(write, end);

// function write(buffer, encoding, next) {
//     this.push(buffer.toString().toUpperCase());
//     next();
// }

// function end(done) {
//     done();
// }

// process.stdin.pipe(stream).pipe(process.stdout);


var tr = through2(function(buff, _, next) {
    this.push(buff.toString().toUpperCase());
    next();
});

process.stdin.pipe(tr).pipe(process.stdout);
