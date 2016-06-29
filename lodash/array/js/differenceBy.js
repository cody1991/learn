console.log('-------------------------------------------------------');

// This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. Result values are chosen from the first array. The iteratee is invoked with one argument: (value).

// Arguments
// array (Array): The array to inspect.
// [values] (…Array): The values to exclude.
// [iteratee=_.identity] (Array|Function|Object|string): The iteratee invoked per element.
// Returns
// (Array): Returns the new array of filtered values.

var a = _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);

console.log(a);
// [1.2]


// The `_.property` iteratee shorthand.
var b = _.differenceBy([{
    'x': 2
}, {
    'x': 1
}], [{
    'x': 1
}], 'x');

console.log(b);
// [{'x':2}]

console.log('-------------------------------------------------------');
