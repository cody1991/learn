var trumpet = require('trumpet');
var fs = require('fs');
var through2 = require('through2');
var tr = trumpet();

var loud = tr.select('.loud').createStream();

loud.pipe(through2(function(buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
})).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);


// fs.createReadStream('input.html').pipe(tr);

// var stream = tr.select('.beep').createStream();
