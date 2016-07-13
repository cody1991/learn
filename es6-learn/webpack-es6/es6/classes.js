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
        Circle2.circlesMade++;
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


    // ------------

    //     尽管这比以前更好，但是它仍然不能满足人们对于简洁的JavaScript面向对象解决方案的渴望。在其它语言中，有一个句法结构可以用来处理面向对象设计的问题，经过一番讨论后他们将其命名为类（Class）。

    // 好吧，让我们也来添加一些类。

    // 我们需要这样一个系统：给命名构造函数添加方法的同时给函数的.prototype属性也添加相应方法，从而用这个类构造出的实例也包含相应的方法。既然我们掌握了一种崭新的方法定义语言，我们一定要物尽其用。在类的所有实例中，我们只需要一种区分普通函数与特殊函数的方法，在C++或Java中，这种功能对应的关键字是static。这种方法看起来不错，让我们用起来！

    // 我们还需要一个方法，可以在一堆方法中指定出唯一的构造函数。在C++或Java中，构造函数与类同名，并且没有返回类型。既然JS没有返回类型，我们无论如何都需要一个.constructor属性来支持向后兼容性，你可以称之为方法构造函数（method constructor）。

    // 将所有的概念组合到一起后，我们可以重写Circle类并实现所有功能：

    class Circle3 {
        constructor(radius) {
            this.radius = radius;
            Circle3.circlesMade++;
        };
        static draw(circle, canvas) {

        };
        static get circlesMade() {
            return !this._count ? 0 : this._count;
        };
        static set circlesMade(val) {
            this._count = val;
        };
        area() {
            return Math.pow(this.radius, 2) * Math.PI;
        };
        get radius() {
            return this._radius;
        };
        set radius(radius) {
            if (!Number.isInteger(radius)) {
                console.info('圆半径必须整数');
            }
            this._radius = radius;
        };
    }

    //     虽然如此，有的人有可能会遇到问题或碰到边缘用例。我会尝试着预测你们将会遇到的问题并一一解答：

    // 分号是怎么回事？—— 在一次“打造传统类”的尝试中，我们决定编写一个更传统的分隔符。如果不喜欢可以不写，分隔符是可选的。

    // 如果我不想要一个构造函数，但是仍然想在创建的对象中放置方法呢？—— 好吧，constructor方法也是可选的，对象中会默认声明一个空的构造函数constructor() {}。

    // 可以用生成器作为构造函数么？—— 坚决不可以！构造器不是普通方法，随意添加将会触发类型错误（TypeError），这条规则同样适用于生成器和访问器。

    // 我可以用预计算属性名来定义构造函数么？—— 很不幸的是不可以！那将会变得很难预测，所以我们不去尝试。如果你用预计算属性名定义一个方法来命名构造函数，你将得到一个名为constructor的方法，它就不是类的构造函数了。

    // 如果我改变了Circle的值，会导致new Circle的行为异常么？—— 不会！类与函数表达式类似，会得到一个给定名称的内部绑定，这个绑定不会被外部力量改变，所以无论你在外围作用域给Circle变量设置什么值，构造器中的Circle.circlesMade++依然会像预期一样运行。

    // 好的，但是我可能直接给函数传一个对象字面量作为参数，类是不是就不能实例化了？—— 幸运的是，ES6中也支持类表达式！可以是命名或匿名表达式，且行为与上述一致，唯一的区别是它们不会在你声明它们的作用域中创建变量。

    // 上面提到的可枚举性、可配置性又如何解释呢？—— 人们希望在类中装载的方法是可配置、不可枚举的。一来你可以在对象中装载方法，二来当你枚举对象属性时，不会将装载的方法枚举出来，得到的只是附加的数据属性，这样做是有道理的。

    // 嗨，等等……什么……？我的实例变量在哪儿？静态和常量呢？—— 好吧，你问住我了。ES6目前的定义中不存在相关信息。但是有个好消息，在诸多的规范进程中，我强烈支持在类语法中加入可选的static和const关键字，该提案已经正式向规范会议递交并处于议程中，我认为我们可以期待在未来会产生更多的相关讨论。

    // 好的，即使这样，这些内容都很赞！我们现在可以使用这些技术么？—— 不完全可以。目前，你们可以借助polyfill（尤其是Babel）来熟悉特性的相关语法，等到所有主流浏览器原生支持还需要一段时间。我已经在Firefox的Nightly版本中实现了我们所讨论的所有特性；同样，这些特性在Edge和Chrome中也已实现，只是默认不启用；目前Safari尚未实现相关特性。

    // 在这里我们没有提及Java和C+++中的子类（subclassing）和super关键字，JS也有么？– 是的，它有！我们完全可以在另一篇文章中详细讨论，后续欢迎回来与我们一起探索子类，挖掘更多JavaScript类实现的强大之处。
};


export default classes;
