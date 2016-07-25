console.log('-------------------------------------------------------');

// This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values. Result values are chosen from the first array. The comparator is invoked with two arguments:
// (arrVal, othVal).

// Arguments
// array (Array): The array to inspect.
// [values] (…Array): The values to exclude.
// [comparator] (Function): The comparator invoked per element.
// Returns
// (Array): Returns the new array of filtered values.

var objects = [{
    'x': 1,
    'y': 2
}, {
    'x': 2,
    'y': 1
}];

var a = _.differenceWith(objects, [{
    'x': 1,
    'y': 2
}], _.isEqual);

console.log(a);
// [{ 'x': 2, 'y': 1 }]

console.log('-------------------------------------------------------');
