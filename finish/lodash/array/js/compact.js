console.log('-------------------------------------------------------');

// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// Arguments
// array (Array): The array to compact.

var a = _.compact([0, 1, false, 2, '', 3, undefined, null]);

console.log(a); // [1,2,3]

console.log('-------------------------------------------------------');
