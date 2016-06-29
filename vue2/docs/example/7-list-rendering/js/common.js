var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        object: {
            FirstName: 'John',
            LastName: 'Doe',
            Age: 30
        },
        items: [{
            message: 'Foo',
            _uid: '1'
        }, {
            message: 'Bar',
            _uid: '2'
        }]
    }
});


// push()
// pop()
// shift()
// unshift()
// splice()
// sort()
// reverse()
// example1.items.push({ message: 'Baz' }).

// Mutation methods, as the name suggests, mutate the original array they are called on. In comparison, there are also non-mutating methods, e.g. filter(), concat() and slice(), which do not mutate the original Array but always return a new array. When working with non-mutating methods, you can just replace the old array with the new one:

app.items = app.items.filter(function(item) {
    return item.message.match(/Foo/);
})


// Due to limitations in JavaScript, Vue cannot detect the following changes to an array:

// When you directly set an item with the index, e.g. vm.items[indexOfItem] = newValue
// When you modify the length of the array, e.g. vm.items.length = newLength

// To overcome caveat 1, both of the following will accomplish the same as vm.items[indexOfItem] = newValue, but will also trigger state updates in the reactivity system:

// Vue.set(app.items,indexOfItem,newValue);
// app.items.splice(indexOfItem,1,newValue);
// app.items.splice(newLenght);
