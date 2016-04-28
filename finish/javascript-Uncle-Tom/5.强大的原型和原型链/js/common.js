(function() {
    var Calculator = function(decimalDigits, tax) {
        this.decimalDigits = decimalDigits;
        this.tax = tax;
    }

    // Calculator.prototype = {
    //     add: function(x, y) {
    //         return x + y;
    //     },
    //     subtract: function(x, y) {
    //         return x - y;
    //     }
    // };

    Calculator.prototype = (function() {
        var add = function(x, y) {
            return x + y;
        }
        var subtract = function(x, y) {
            return x - y;
        }
        return {
            add: add,
            subtract: subtract
        }
    })();

    console.log((new Calculator()).add(1, 3));


    var BaseCalculator = function() {
        this.decimalDigits = 2;
    }

    BaseCalculator.prototype.add = function(x, y) {
        return x + y;
    }

    BaseCalculator.prototype.subtract = function(x, y) {
        return x - y;
    }

    var CalculatorTwo = function() {
        this.tax = 5;
    }

    // CalculatorTwo.prototype = new BaseCalculator();
    // 上面的代码，运行以后，我们可以看到因为Calculator的原型是指向BaseCalculator的实例上的，所以可以访问他的decimalDigits属性值，那如果我不想让Calculator访问BaseCalculator的构造函数里声明的属性值，那怎么办呢？这么办：
    CalculatorTwo.prototype = BaseCalculator.prototype;
    // 通过将BaseCalculator的原型赋给Calculator的原型，这样你在Calculator的实例上就访问不到那个decimalDigits值了，如果你访问如下代码，那将会提升出错。

    // 覆盖代码
    CalculatorTwo.prototype.add = function(x, y) {
        return x + y + this.tax;
    }

    var calc = new CalculatorTwo();

    console.log(calc);

    console.log(calc.add(1, 1));
    console.log(calc.decimalDigits);


    function Foo() {
        this.value = 42;
    }
    Foo.prototype = {
        method: function() {}
    };

    function Bar() {}

    // 设置Bar的prototype属性为Foo的实例对象
    Bar.prototype = new Foo();
    Bar.prototype.foo = 'Hello World';

    // 修正Bar.prototype.constructor为Bar本身
    Bar.prototype.constructor = Bar;

    var test = new Bar() // 创建Bar的一个新实例

    console.log(test);


    function fooTwo() {
        this.add = function(x, y) {
            return x + y;
        }
    }

    fooTwo.prototype.add = function(x, y) {
        return x + y + 10;
    }

    Object.prototype.substract = function(x, y) {
        return x - y;
    }

    var f = new fooTwo();
    console.log(f.add(1, 2));
    console.log(f.substract(1, 2));

    Object.prototype.bar = 1;
    var fooThree = {
        goo: undefined
    }

    console.log(fooThree.bar);
    console.log('bar' in fooThree);
    console.log(fooThree.hasOwnProperty('bar'));
    console.log(fooThree.hasOwnProperty('goo'));

    // JavaScript 不会保护 hasOwnProperty 被非法占用，因此如果一个对象碰巧存在这个属性，就需要使用外部的 hasOwnProperty 函数来获取正确的结果。

    var fooFour = {
        hasOwnProperty: function() {
            return false;
        },
        bar: 'Here be dangons'
    }

    console.log(fooFour.hasOwnProperty('bar'));
    console.log({}.hasOwnProperty.call(fooFour, 'bar'));


    Object.prototype.barTwo = 1;
    var fooFive = {
        moo: 2
    };
    for (var i in fooFive) {
        console.log(i);
    }

    console.log('-------------------------');

    for (var i in fooFive) {
        if (fooFive.hasOwnProperty(i)) {
            console.log(i);
        }
    }
})();