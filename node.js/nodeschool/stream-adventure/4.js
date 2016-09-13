var through2 = require('through2'),
    split = require('split');
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

var toLower = true;

var tr = through2(function(buff, _, next) {

    if (toLower) {
        this.push(buff.toString().toLowerCase() + '\n');
    } else {
        this.push(buff.toString().toUpperCase() + '\n');
    }
    toLower = !toLower;
    next();
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
