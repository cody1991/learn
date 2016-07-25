console.log('-------------------------------------------------------');

// Creates a new array concatenating array with any additional arrays and/or values.

// Arguments
// array (Array): The array to concatenate.
// [values] (…*): The values to concatenate.

var a = [1];
var other = _.concat(a, 2, [3], [
    [4]
]);

console.log(other);
//  [1, 2, 3, [4]]

console.log(a);
// [1]

console.log('-------------------------------------------------------');
