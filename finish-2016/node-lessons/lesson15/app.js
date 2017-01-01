var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', {
    name: String,
    friends: [String],
    age: Number
});

var kitty = new Cat({
    name: 'cody',
    friends: ['tom', 'jerry'],
});

kitty.age = 3;

kitty.save(function(err) {
    if (err) {
        console.log(err);
    }
    console.log('meow');
});
