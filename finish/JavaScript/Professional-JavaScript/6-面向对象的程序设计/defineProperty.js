var person = {};

Object.defineProperty(person, 'name', {
    writeable: false,
    value: 'Nicholas',
    configurable: false // 这个设置为false就不能改回去了
});
console.log(person.name);
person.name = 'cody';
console.log(person.name);

delete person.name;
console.log(person.name);

var book = {
    _year: 2004,
    edition: 1
}

Object.defineProperty(book, 'year', {
    get: function() {
        return this._year
    },
    set: function(newValue) {
        this._year = newValue;
        this.edition += newValue - 2004
    }
});

console.log(book.year);
book.year = 2016;
console.log(book.year);

var book2 = {};

Object.defineProperties(book2, {
    _year: {
        value: 2004,
    },
    edition: {
        value: 1
    },
    year: {
        get: function() {
            return this._year;
        },
        set: function() {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});

var descriptor = Object.getOwnPropertyDescriptor(book2, '_year');

console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(descriptor.get);

descriptor = Object.getOwnPropertyDescriptor(book2, 'year');

console.log(descriptor.value);
console.log(descriptor.enumerable);
console.log(descriptor.get);
