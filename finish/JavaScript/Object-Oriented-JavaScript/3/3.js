var a = function(param) {
    var b = function(theinput) {
        return theinput * 2;
    }
    return 'The result is ' + b(param);
}

console.log(a(2));
