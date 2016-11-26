var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(numbers.every(function(item, index, array) {
    return item > 2;
}));

console.log(numbers.some(function(item, index, array) {
    return item > 2;
}));

var filterResult = numbers.filter(function(item, index, array) {
    return (item > 2);
});

console.log(filterResult);

var mapResult = numbers.map(function(item, index, array) {
    return item * 2;
});

console.log(mapResult);

numbers.forEach(function(item, index, array) {
    console.log(item + '-' + index);
    console.log(array);
});

var num = [1, 2, 1, 1, 2, 3, 4];

sum = num.reduce(function(prev, cur, index, array) {
    console.log(prev, cur);
    return prev + cur;
});

console.log(sum);
