var classes = function() {
    function Circle(radius) {
        this.radius = radius;
        Circle.circlesMade++;
    }

    Circle.draw = function draw(circle, canvas) {};

    Object.defineProperty(Circle, 'circlesMade', {
        get: function() {
            return !this._count ? 0 : this._count;
        },
        set: function(val) {
            this._count = val;
        }
    });

    Circle.prototype = {
        area: function area() {
            return Math.pow(this.radius, 2) * Math.PI;
        }
    }

    Object.defineProperty(Circle.prototype, 'radius', {
        get: function() {
            return this._radius;
        },
        set: function(radius) {
            if (!Number.isInteger(radius)) {
                throw new Error('圆半径必须整数');
            }
            this._radius = radius;
        }
    });

    // 按照目前常见的JS编码风格，我们首先应该以函数的形式创建一个构造函数，然后给该函数添加任何我们可能想要的属性，然后用一个对象替换构造函数的prototype属性。这个prototype对象将包含构造函数创建的实例的所有初始化属性。下面是一个简单的示例，可以直接作为样板文件（boilerplate）重复使用：

    // 这段代码非常繁琐且不符合人的直觉，要想读懂必须对函数的运行方式有着非凡的掌握，然后你才能理解各种已装载的属性与生成的实例对象进行绑定的方式。如果这种方法看起来很复杂，不要担心，这篇文章会为你展示一种更简单的方法来实现所有这些功能。

    //     ES6提供一种向对象添加特殊属性的新语法，可以帮助我们清理这些方法。给Circle.prototype添加area方法非常简单，但是给radius添加getter/setter方法对就很难。随着JS引入越来越多的面向对象方法，人们开始对简化给对象添加访问器的方法感兴趣。我们需要一种功能类似obj.prop = method的新方法来给对象添加“方法”，同时不借助Object.defineProperty的力量。人们想要能够简单地实现以下功能：

    // 给对象添加标准的函数属性。
    // 给对象添加生成器函数属性。
    // 给对象添加标准的访问器函数属性。
    // 给对象添加任意使用[]语法添加的函数属性，我们称其为预计算（computed）属性名。
    // 其中一些功能在以前无法实现，例如：我们不能通过给obj.prop赋值来定义getter或setter。因此，我们亟需新语法来编写以下代码：

    // var obj = {
    // // 现在不再使用function关键字给对象添加方法
    // // 而是直接使用属性名作为函数名称。
    // method(args) { ... },
    // // 只需在标准函数的基础上添加一个“*”，就可以声明一个生成器函数。
    // *genMethod(args) { ... },
    // // 借助|get|和|set|可以在行内定义访问器。
    // // 只是定义内联函数，即使没有生成器。
    // // 注意通过这种方式装载的getter不能接受参数
    // get propName() { ... },
    // // 注意通过这种方式装载的setter至少接受一个参数
    // set propName(arg) { ... },
    // // []语法可以用于任意支持预计算属性名的地方，来满足上面的第4中情况。
    // // 这意味着你可以使用symbol，调用函数，联结字符串
    // // 或其它可以给property.id求值的表达式。
    // // 这个语法对访问器或生成器同样有效，我在这里只是举个例子。
    // [functionThatReturnsPropertyName()] (args) { ... }
    // };

    // 现在， 我们可以用这种新语法重写上面的代码片段：

    function Circle2(radius) {
        this.radius = radius;
        Circle.circlesMade++;
    }

    Circle.draw = function draw(circle, canvas) {}

    Object.defineProperty(Circle2, 'circlesMade', {
        get: function() {
            return !this._count ? 0 : this._count;
        },
        set: function(val) {
            this._count = val;
        }
    });

    Circle2.prototype = {
        area() {
            return Math.pow(this.radius, 2) * Math.PI;
        },
        get radius() {
            return this._radius;
        },
        set radius(radius) {
            if (!Number.isInteger(radius)) {
                throw new Error('圆半径必须整数');
            }
            this._radius = radius;
        }
    }

    // 讲究地说，这段代码与上面的代码段并不完全相同，装载后的对象字面量中的方法定义是可配置（configurable）和可枚举（enumerable） 的，然而在第一段代码段中却不是这样。事实上，很少有人会注意到这个问题，我决定为了简洁起见暂时省略可枚举性和可配置性。

    // 不过，这段代码依然变得更好了，不是么？不幸的是，即使有了新的方法定义语法，我们仍然不能武装到牙齿，所以仍然需要通过定义函数来定义Circle类。没有一种方法能够让你在定义函数时就获取它的属性。
};


export default classes;
