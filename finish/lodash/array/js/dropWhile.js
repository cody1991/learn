console.log('-------------------------------------------------------');

// Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

// Since
// 3.0.0

// Arguments
// array (Array): The array to query.
// [predicate=_.identity] (Array|Function|Object|string): The function invoked per iteration.
// Returns
// (Array): Returns the slice of array.

var users = [{
    'user': 'barney',
    'active': false
}, {
    'user': 'fred',
    'active': false
}, {
    'user': 'pebbles',
    'active': true
}];

var a = _.dropWhile(users, function(o) {
    return !o.active;
});

console.log(a);
// ['pebbles']

var b = _.dropWhile(users, {
    'user': 'barney',
    'active': false
});
// ['fred','pebbles']

var c = _.dropWhile(users, ['active': false]);

// ['pebbles'];

var d = _.dropWhile(users, 'active');
// ['barney','fred','pebbles'];

console.log('-------------------------------------------------------');
