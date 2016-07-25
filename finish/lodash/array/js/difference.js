console.log('-------------------------------------------------------');

// Creates an array of unique array values not included in the other given arrays using SameValueZero for equality comparisons. The order of result values is determined by the order they occur in the first array.

// Arguments
// array (Array): The array to inspect.
// [values] (…Array): The values to exclude.
// Returns
// (Array): Returns the new array of filtered values.

var a = _.difference([2, 1], [2, 3]);
// [1]

console.log(a);

console.log('-------------------------------------------------------');
