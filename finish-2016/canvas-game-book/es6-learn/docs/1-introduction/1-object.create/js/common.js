(function() {
    // 使用Object.create实现类式继承

    // 下面的例子演示了如何使用Object.create()来实现类式继承。这是一个单继承。

    function Shape() {
        this.x = 0;
        this.y = 0;
    }

    Shape.prototype.move = function(x, y) {
        this.x += x;
        this.y += y;
        console.info("Shape moved");
    }

    function Rectangle() {
        // call super constructor
        Shape.call(this);
    }

    Rectangle.prototype = Object.create(Shape.prototype);

    var rect = new Rectangle();

    console.log(rect instanceof Rectangle);
    console.log(rect instanceof Shape);

    rect.move(1, 1);

    // ------------

    var o;
    // 创建一个原型为null的空对象
    // o = Object.create(null);

    // o = {};
    // 以字面量方式创建的空对象就相当于:
    // o = Object.create(Object.prototype);

    // o = Object.create(Object.prototype, {
    //     foo: {
    //         writable: true,
    //         configurable: true,
    //         value: 'hello'
    //     },
    //     bar: {
    //         configurable: false,
    //         get: function() {
    //             return 10;
    //         },
    //         set: function(value) {
    //             console.log("Setting `o.bar` to ", value);
    //         }
    //     }
    // });

    function Constructor() {}
    o = new Constructor();
    // 上面的一句就相当于:
    o = Object.create(Constructor.prototype);
    // 当然,如果在Constructor函数中有一些初始化代码,Object.create不能执行那些代码


    // 创建一个以另一个空对象为原型,且拥有一个属性p的对象
    // o = Object.create({}, {
    //     p: {
    //         value: 42
    //     }
    // })

    // // 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的:
    // o.p = 24
    // o.p
    //     //42

    // o.q = 12
    // for (var prop in o) {
    //     console.log(prop)
    // }
    // //"q"

    // delete o.p
    //     //false

    // //创建一个可写的,可枚举的,可配置的属性p
    // o2 = Object.create({}, {
    //     p: {
    //         value: 42,
    //         writable: true,
    //         enumerable: true,
    //         configurable: true
    //     }
    // });
})();
