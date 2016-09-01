var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

var init1 = function(str) {
    return +str;
}
var init2 = function(str) {
    return parseInt(str, 10);
}
var init3 = function(str) {
    return Number(str);
}

var number = '100';

suite
    .add('+', function() {
        init1(number);
    })
    .add('parseInt', function() {
        init2(number);
    })
    .add('Number', function() {
        init3(number);
    })
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({
        'async': true
    });
