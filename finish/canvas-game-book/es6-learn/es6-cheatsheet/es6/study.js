function study() {

    // var snack = 'Meow Mix';

    // function getFood(food) {
    //     if (food) {
    //         var snack = 'Friskies';
    //         return snack;
    //     }
    //     return snack;
    // }

    // console.log(getFood(false)); // 输出undefined

    let snack = 'Meow Mix';

    function getFood(food) {
        if (food) {
            let snack = 'Friskies';
            return snack;
        }
        return snack;
    }

    console.log(getFood(false)); // 输出Meow Mix

    (function() {
        var foo = 'Meow Mix';
    })();

    // console.log(foo); // RReference Error

    {
        let foo = 'Meow Mix';
    }

    // console.log(foo); // RReference Error

    function Person(name) {
        this.name = name;
    }

    // Person.prototype.prefixName = function(arr) {
    //     return arr.map(function(character) {
    //         return this.name + character; // // Cannot read property 'name' of undefined
    //     });
    // }

    // Person.prototype.prefixName = function(arr) {
    //     var that = this;
    //     return arr.map(function(character) {
    //         that.name = that.name + character;
    //     });
    // }

    // Person.prototype.prefixName = function(arr) {
    //     return arr.map(function(character) {
    //         this.name = this.name + character;
    //     }, this);
    // }

    // Person.prototype.prefixName = function(arr) {
    //     return arr.map(function(character) {
    //         this.name = this.name + character;
    //     }.bind(this));
    // }

    Person.prototype.prefixName = function(arr) {
        return arr.map(character => this.name = this.name + character);
    }


    var person = new Person('helloworld');
    person.prefixName(['ha', '123']);
    console.log(person);

    // var arr = [1, 2, 3, 4];

    // var squares = arr.map(function(x) {
    //     return x * x;
    // });

    const arr = [1, 2, 3, 4];
    const squares = arr.map(x => x * x);

    console.log(squares);

    var string1 = 'food';
    var substring1 = 'foo';
    console.log(string1.indexOf(substring1) > -1);

    const string2 = 'food';
    const substring2 = 'foo';
    console.log(string2.includes(substring2));

    function repeat(string, count) {
        var strings = [];
        while (strings.length < count) {
            strings.push(string);
        }
        return strings.join('');
    }

    var string3 = 'haha';
    string3 = repeat(string3, 3);
    console.log(string3);


}

export default study;
