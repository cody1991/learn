console.log('-------------------------------------------------------');

// Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

// Since
// 3.0.0

// Arguments
// array (Array): The array to query.
// [predicate=_.identity] (Array|Function|Object|string): The function invoked per iteration.
// Returns
// (Array): Returns the slice of array.

var users = [{
    'user': 'barney',
    'active': true
}, {
    'user': 'fred',
    'active': false
}, {
    'user': 'pebbles',
    'active': false
}];

var a = _.dropRightWhile(users, function(o) {
    return !o.active;
});

console.log(a);
// objects for ['barney']

// The `_.matches` iteratee shorthand.
var b = _.dropRightWhile(users, {
    'user': 'pebbles',
    'active': false
});

console.log(b);
// objects for ['barney', 'fred']

// The `_.matchesProperty` iteratee shorthand.
var c = _.dropRightWhile(users, ['active', false]);

console.log(c);
// objects for ['barney']

// The `_.property` iteratee shorthand.
var d = _.dropRightWhile(users, 'active');

console.log(d);
// objects for ['barney', 'fred', 'pebbles']


console.log('-------------------------------------------------------');
