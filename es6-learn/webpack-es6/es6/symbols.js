var symbols = function() {
    // 1997年JavaScript首次被标准化，那时只有六种原始类型，在ES6以前，JS程序中使用的每一个值都是以下几种类型之一：

    // Undefined 未定义
    // Null 空值
    // Boolean 布尔类型
    // Number 数字类型
    // String 字符串类型
    // Object 对象类型

    // 每种类型都是多个值的集合，前五个集合是有限的。布尔类型只有两个值，true和false，不会再创造第三种布尔值；数字类型和字符串类型的值更多，标准指明一共有18,437,736,874,454,810,627种不同的数字（包括NaN， 亦即“Not a Number”的缩写，代表非数字），可能存在的字符串类型的值拥有无以匹敌的数量，我估算了一下大约是 (2144,115,188,075,855,872 − 1) ÷ 65,535种……当然，我很可能得出了一个错误的答案，但字符串类型值的集合一定是有限的。

    // 然而，对象类型值的集合是无限的。每一个对象都像珍贵的雪花一样独一无二，每一次你打开一个Web页面，都会创建一堆对象。

    // ES6新特性中的symbol也是值，但它不是字符串，也不是对象，而是是全新的——第七种类型的原始值。

    //     有时候你可以非常轻松地将别人的外部数据存储到一个JavaScript对象中。

    // 举 个例子，假设你正在写一个JS库，可以通过CSS transitions使DOM元素在屏幕上移动。你可能会注意到，当你尝试在一个div元素上同时应用多重CSS transitions时并不会生效。实际效果是丑陋而又不连续的“跳闪”。你认为可以修复这个问题，但前提是你需要一种发现给定元素是否已经移动过的方 法。

    // 应当如何解决这个问题呢？

    // 一种方法是，用CSS API来告诉浏览器元素是否正在移动，但这样简直小题大做。在元素移动的第一时间内你的库就应该记录下移动的状态，所以它自然知道元素正在移动。

    // 你真正想要的是一种持续跟踪某个元素正在移动的方法。你可以维护一个数组，记录所有正在移动的元素，每当你的库被调用来移动某个元素时，你可以检索数组来查看元素是否已经存在，亦即它是否正在移动中。

    // 当然，如果数组非常大的话，线性搜索将会非常缓慢。

    // 实际上你只想为元素设置一个标记：

    //  if (element.isMoving) {
    //   smoothAnimations(element);
    // }
    // element.isMoving = true;

    //     这样也会有一些潜在的问题，事实上，你的代码很可能不是唯一一段操作DOM的代码。

    // 你创建的属性很可能影响到其它使用了for-in或Object.keys()的代码。
    // 一些聪明的库作者可能已经考虑并使用了这项技术，这样一来你的库就会与已有的库产生某些冲突
    // 当然，很可能你比他们更聪明，你先采用了这项技术，但是他们的库仍然无法与你的库默契配合。
    // 标准委员会可能决定为所有的元素增加一个.isMoving()方法，到那时你需要重写相关逻辑，必定会有深深的挫败感。
    // 当然你可以选择一个乏味而愚蠢的命名（其他人根本不会想用的那些名称）来解决最后的三个问题：

    // if (element.__$jorendorff_animation_library$PLEASE_DO_NOT_USE_THIS_PROPERTY$isMoving__) {
    // smoothAnimations(element);
    // }
    // element.__$jorendorff_animation_library$PLEASE_DO_NOT_USE_THIS_PROPERTY$isMoving__ = true;

    //     这只会造成无畏的眼疲劳。

    // 借助于密码学，你可以生成一个唯一的属性名称：

    //     // 获取1024个Unicode字符的无意义命名
    //     var isMoving = SecureRandom.generateName();
    //     ...
    //     if (element[isMoving]) {
    //       smoothAnimations(element);
    //     }
    //     element[isMoving] = true;

    //     object[name]语法允许你使用几乎任何字符串作为属性名称。所以这个方法行之有效：冲突几乎是不可能的，并且你的代码看起来也很简洁。

    // 但是这也将带来不良的调试体验。每当你在控制台输出（console.log()）包含那个属性的元素时，你将会看到一堆巨大的字符串垃圾。假使你需要比这多得多的类似属性呢？你如何保持它们整齐划一？每当你重载的时候它们的命名甚至都不一样！

    // 为什么这个问题如此困难？我们只想要一个小小的布尔值啊！

    var mySymbol = Symbol();
    console.log(mySymbol);

    let obj = {

    };
    obj[mySymbol] = 'ok!';
    console.log(obj);

    var isMoving = Symbol('isMoving');
    var isMovingObj = {

    };
    if (isMovingObj[isMoving]) {
        console.log(1);
    }
    isMovingObj[isMoving] = true;
    isMovingObj[Symbol('second')] = 'second';

    console.log(isMovingObj);

    //     有关这段代码的一些解释：

    // Symbol("isMoving")中的isMoving被称作描述。你可以通过console.log()将它打印出来，对调试非常有帮助；你也可以用.toString()方法将它转换为字符串呈现；它也可以被用在错误信息中。

    // element[isMoving]被称作一个以symbol为键（symbol-keyed）的属性。简而言之，它的名字是symbol而不是一个字符串。除此之外，它与一个普通的属性没有什么区别。

    // 以symbol为键的属性属性与数组元素类似，不能被类似obj.name的点号法访问，你必须使用方括号访问这些属性。

    // 如果你已经得到了symbol，那么访问一个以symbol为键的属性同样简单，以上的示例很好地展示了如何获取element[isMoving]的值以及如何为它赋值。如果我们需要，可以查看属性是否存在：if (isMoving in element)，也可以删除属性：delete element[isMoving]。

    // 另一方面，只有当isMoving在当前作用域中时才会生效。这是symbol的弱封装机制：模块创建了几个symbol，可以在任意对象上使用，无须担心与其它代码创建的属性产生冲突。


    // ymbol键的设计初衷是避免初衷，因此JavaScript中最常见的对象检查的特性会忽略symbol键。例如，for-in循环只会遍历对象的字符串键，symbol键直接跳过，Object.keys(obj)和Object.getOwnPropertyNames(obj)也是一样。但是symbols也不完全是私有的：用新的API Object.getOwnPropertySymbols(obj)就可以列出对象的symbol键。另一个新的API，Reflect.ownKeys(obj)，会同时返回字符串键和symbol键。（我们将在随后的文章中讲解Reflect(反射) API）。

    console.log(Object.getOwnPropertySymbols(isMovingObj));

    console.log(typeof Symbol());

    // symbol被创建后就不可变更，你不能为它设置属性（在严格模式下尝试设置属性会得到TypeError的错误）。他们可以用作属性名称，这些性质与字符串类似。

    // 另一方面，每一个symbol都独一无二，不与其它symbol等同，即使二者有相同的描述也不相等；你可以轻松地创建一个新的symbol。这些性质与对象类似。

    // 关于symbol的忠告：symbol不能被自动转换为字符串，这和语言中的其它类型不同。尝试拼接symbol与字符串将得到TypeError错误。

    // > var sym = Symbol("<3");
    // > "your symbol is " + sym
    // // TypeError: can't convert symbol to string
    // > `your symbol is ${sym}`
    // // TypeError: can't convert symbol to string

    // 通过String(sym)或sym.toString()可以显示地将symbol转换为一个字符串，从而回避这个问题。

    console.log(isMoving.toString());

    //     获取symbol的三种方法

    // 有三种获取symbol的方法。

    // 调用Symbol()。正如我们上文中所讨论的，这种方式每次调用都会返回一个新的唯一symbol。

    // 调用Symbol.for(string)。这种方式会访问symbol注册表，其中存储了已经存在的一系列symbol。这种方式与通过Symbol()定义的独立symbol不同，symbol注册表中的symbol是共享的。如果你连续三十次调用Symbol.for("cat")，每次都会返回相同的symbol。注册表非常有用，在多个web页面或同一个web页面的多个模块中经常需要共享一个symbol。

    // 使用标准定义的symbol，例如：Symbol.iterator。标准根据一些特殊用途定义了少许的几个symbol。

    // 在之前的文章《深入浅出ES6（二）：迭代器和for-of循环》中，我们已经领略了借助ES6 symbol的力量避免代码冲突的方法，循环for (var item of myArray)首先调用myArray[Symbol.iterator]()，当时我提到这种写法是为了替代myArray.iterator()，拥有更好的向后兼容性。

    // 现在我们知道symbol到底是什么了，自然很容易理解为什么我们要创造一个symbol以及它为我们带来什么新特性。

    //     S6中还有其它几处使用了symbol的地方。（这些特性在Firefox里尚未实现。）

    // 使instanceof可扩展。在ES6中，表达式object instanceof constructor被指定为构造函数的一个方法：constructor[Symbol.hasInstance](object)。这意味着它是可扩展的。

    // 消除新特性和旧代码之间的冲突。这一点非常复杂，但是我们发现，添加某些ES6数组方法会破坏现有的Web网站。其它Web标准有相同的问题：向浏览器中添加新方法会破坏原有的网站。然而，破坏问题主要由动态作用域引起，所以ES6引入一个特殊的symbol——Symbol.unscopables，Web标准可以用这个symbol来阻止某些方法别加入到动态作用域中。

    // 支持新的字符串匹配类型。在ES5中，str.match(myObject)会尝试将myObject转换为正则表达式对象（RegExp）。在ES6中，它会首先检查myObject是否有一个myObject[Symbol.match](str)方法。现在的库可以提供自定义的字符串解析类，所有支持RegExp对象的环境都可以正常运行。

    // 这些用例的应用范围都非常小，很难看到这些特性通过它们自身影响我们每日的代码，长期来看才能体现它们的价值。实际上，symbol是PHP和Python中的__doubleUnderscores在JavaScript语言环境中的改进版。标准将借助symbol的力量在未来向语言中添加新的钩子，同时无风险地将新特性添加到你已有的代码中。

    // 我何时可以使用ES6 symbol？

    // symbol在Firefox 36和Chrome 38中均已被实现。Firefox中的实现由我亲自完成，所以如果你的symbol像铙钹（cymbals）一样行为异常，请直接联系我！

    // 为了支持那些尚未支持原生ES6 symbol的浏览器，你可以使用一个polyfill，例如core.js。因为symbol与其它类型不尽相同，所以polyfill目前不是很完美。
};

export default symbols;
