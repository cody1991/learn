function setup(x) {
    var i = 0;
    return function() {
        return x[i++];
    }
}

var next = setup(['a', 'b', 'c']);

console.log(next());
console.log(next());
console.log(next());
