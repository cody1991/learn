(function() {
    var a = _.assign({
        'a': 1
    }, {
        'b': 2
    }, {
        'c': 3
    });

    console.log(a);

    var b = _.map([1, 2, 3], function(n) {
        return n * 3;
    });

    console.log(b);
})();
