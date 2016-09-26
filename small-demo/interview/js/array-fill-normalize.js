function normalize(arr) {
    if (arr && Array.isArray(arr)) {
        var i, len, map = {};
        for (i = arr.length; i >= 0; --i) {
            if (arr[i] in map) {
                arr.splice(i, 1);
            } else {
                map[arr[i]] = true;
            }
        }
    }
}

function fillArray(arr, start, end, length) {
    start = start == undefined ? 1 : start;
    end = end == undefined ? 100 : end;

    if (end <= start) {
        end = start + 100;
    }

    var width = end - start;
    var i;
    for (i = length; i >= 1; --i) {
        arr.push('' + (Math.floor(Math.random() * width) + start));
    }
    return arr;
}

var input = [];
fillArray(input, 1, 100, 100);

input.sort(function(a, b) {
    return a - b;
});

// console.log(input);

normalize(input);

console.log(input);
console.log(input.length);
