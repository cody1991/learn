(function() {
    function fuzzyPlural(single) {
        var result = single.replace(/o/g, 'e');
        if (single === 'kangaroo') {
            result += 'se';
        }

        return result;
    }

    var words = ['foot', 'goose', 'moose', 'kangaroo'];

    console.log(words.map(fuzzyPlural));

    var numbers = [1, 4, 9];
    var toos = numbers.map(Math.sqrt);

    console.log(toos);

    var map = Array.prototype.map;

    var a = map.call('Hello World', function(x) {
        return x.charCodeAt(0);
    });

    console.log(a);

    function returnInt(element) {
        return parseInt(element, 10);
    }

    console.log(["1", "2", "3"].map(returnInt));

    function isBigEnought(element) {
        return element >= 10;
    }

    var filtered = [12, 5, 8, 130, 44].filter(isBigEnought);

    console.log(filtered);

})();
