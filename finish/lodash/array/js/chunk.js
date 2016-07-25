console.log('-------------------------------------------------------');

// Creates an array of elements split into groups the length of size. If array can’t be split evenly, the final chunk will be the remaining elements.

// Arguments
// array (Array): The array to process.
// [size=1] (number): The length of each chunk

var array = ['a', 'b', 'c', 'd'];

var a = _.chunk(array);

console.log(a); // a[0] = ['a']   a[1] = ['b'];

var b = _.chunk(array, 2);

console.log(b); // a[0] = ['a','b']  a[1] = ['c','d']
// [['a', 'b'], ['c', 'd']]

var c = _.chunk(array, 3);

console.log(c); // c[0] = ['a','b','c'] c[1] = ['d']
// [['a', 'b', 'c'], ['d']]

console.log('-------------------------------------------------------');
