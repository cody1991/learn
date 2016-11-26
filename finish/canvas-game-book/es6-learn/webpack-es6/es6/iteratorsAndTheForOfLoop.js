var iteratorsAndTheForOfLoop = function() {
    var myArray = [1, 2, 3, 4, 5, 6];

    console.info('使用for循环');
    for (var index = 0; index < myArray.length; index++) {
        console.log(myArray[index]);
    }

    // es5方法

    console.info('使用forEach');
    myArray.forEach(function(value) {
        console.log(value);
        // 这段代码看起来更加简洁，但这种方法也有一个小缺陷：你不能使用break语句中断循环，也不能使用return语句返回到外层函数。
    });

    // 当然，如果只用for循环的语法来遍历数组元素也很不错。

    // 那么，你一定想尝试一下for-in循环：

    console.info('使用 for in');

    for (var index in myArray) { // 千万别这样做
        console.log(myArray[index]);

        // 这绝对是一个糟糕的选择，为什么呢？

        // 在这段代码中，赋给index的值不是实际的数字，而是字符串“0”、“1”、“2”，此时很可能在无意之间进行字符串算数计算，例如：“2” + 1 == “21”，这给编码过程带来极大的不便。

        // 作用于数组的for-in循环体除了遍历数组元素外，还会遍历自定义属性。举个例子，如果你的数组中有一个可枚举属性myArray.name，循环将额外执行一次，遍历到名为“name”的索引。就连数组原型链上的属性都能被访问到。

        // 最让人震惊的是，在某些情况下，这段代码可能按照随机顺序遍历数组元素。

        // 简而言之，for-in是为普通对象设计的，你可以遍历得到字符串类型的键，因此不适用于数组遍历。

        // ES6不会破坏你已经写好的JS代码。目前看来，成千上万的Web网站依赖for-in循环，其中一些网站甚至将其用于数组遍历。如果想通过修正for-in循环增加数组遍历支持会让这一切变得更加混乱，因此，标准委员会在ES6中增加了一种新的循环语法来解决目前的问题。


    }
    console.info('使用for of')
    for (var value of myArray) {
        // 这是最简洁、最直接的遍历数组元素的语法
        // 这个方法避开了for-in循环的所有缺陷
        // 与forEach()不同的是，它可以正确响应break、continue和return语句
        // 
        // for-in循环用来遍历对象属性。
        // for-of循环用来遍历数据—例如数组中的值。
        // for-of循环也可以遍历其它的集合
        // for-of循环不仅支持数组，还支持大多数类数组对象，例如DOM NodeList对象。
        console.log(value);
    }

    var word = 'HelloWorld';

    console.info('for in string');

    for (var chr of word) {
        console.log(chr);
    }
    var setWord = new Set(word);

    console.info('for in set');

    for (var chr of setWord) {
        console.log(chr);
    }

    console.info('for in Map');

    var phoneBookMap = new Map();

    phoneBookMap.set('1', '15112277883');
    phoneBookMap.set('2', '15112277884');

    for (var [key, value] of phoneBookMap) {
        console.log(key + "'s phone number is : " + value);
    }
    // Map对象稍有不同：内含的数据由键值对组成，所以你需要使用解构（destructuring）来将键值对拆解为两个独立的变量：

    // 解构也是ES6的新特性，我们将在另一篇文章中讲解。看来我应该记录这些优秀的主题，未来有太多的新内容需要一一剖析。

    // 现在，你只需记住：未来的JS可以使用一些新型的集合类，甚至会有更多的类型陆续诞生，而for-of就是为遍历所有这些集合特别设计的循环语句。

    // for-of循环不支持普通对象，但如果你想迭代一个对象的属性，你可以用for-in循环（这也是它的本职工作）或内建的Object.keys()方法：

    console.info('for in object');

    var someObject = {
        "1": 'cody',
        "2": 'wendy'
    }

    for (var key of Object.keys(someObject)) {
        console.log(key + ": " + someObject[key]);
    }

    // 正如其它语言中的for/foreach语句一样，for-of循环语句通过方法调用来遍历各种集合。数组、Maps对象、Sets对象以及其它在我们讨论的对象有一个共同点，它们都有一个迭代器方法。

    // 你可以给任意类型的对象添加迭代器方法。

    // 当你为对象添加myObject.toString()方法后，就可以将对象转化为字符串，同样地，当你向任意对象添加myObject[Symbol.iterator]()方法，就可以遍历这个对象了。

    // 举个例子，假设你正在使用jQuery，尽管你非常钟情于里面的.each()方法，但你还是想让jQuery对象也支持for-of循环，你可以这样做：

    // 因为jQuery对象与数组相似
    // 可以为其添加与数组一致的迭代器方法
    // jQuery.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

    // 那个[Symbol.iterator]语法看起来很奇怪，这段代码到底做了什么呢？这里通过Symbol处理了一下方法的名称。标准委员会可以把这个方法命名为.iterator()方法，但是如果你的代码中的对象可能也有一些.iterator()方法，这一定会让你感到非常困惑。于是在ES6标准中使用symbol来作为方法名，而不是使用字符串。

    // 你大概也猜到了，Symbols是ES6中的新类型，我们会在后续的文章中讲解。现在，你需要记住，基于新标准，你可以定义一个全新的symbol，就像Symbol.iterator，如此一来可以保证不与任何已有代码产生冲突。这样做的代价是，这段代码的语法看起来会略显生硬，但是这微乎其微代价却可以为你带来如此多的新特性和新功能，并且你所做的这一切可以完美地向后兼容。

    // 所有拥有[Symbol.iterator]()的对象被称为可迭代的。在接下来的文章中你会发现，可迭代对象的概念几乎贯穿于整门语言之中，不仅是for-of循环，还有Map和Set构造函数、解构赋值，以及新的展开操作符。


    // start iterators

    // for-of循环首先调用集合的[Symbol.iterator]()方法，紧接着返回一个新的迭代器对象。迭代器对象可以是任意具有.next()方法的对象；for-of循环将重复调用这个方法，每次循环调用一次。举个例子，这段代码是我能想出来的最简单的迭代器：

    var zeroesForeverIterator = {
        [Symbol.iterator]: function() {
            return this;
        },
        next: function() {
            return {
                done: false,
                value: 0
            }
        }
    }

    var zero = zeroesForeverIterator.next();
    console.log(zero);

    // 每一次调用.next()方法，它都返回相同的结果，返回给for-of循环的结果有两种可能：(a) 我们尚未完成迭代；(b) 下一个值为0。这意味着(value of zeroesForeverIterator) {}将会是一个无限循环。当然，一般来说迭代器不会如此简单。

    // 这个迭代器的设计，以及它的.done和.value属性，从表面上看与其它语言中的迭代器不太一样。在Java中，迭代器有分离的.hasNext()和.next()方法。在Python中，他们只有一个.next() 方法，当没有更多值时抛出StopIteration异常。但是所有这三种设计从根本上讲都返回了相同的信息。

    // 迭代器对象也可以实现可选的.return()和.throw(exc)方法。如果for-of循环过早退出会调用.return()方法，异常、break语句或return语句均可触发过早退出。如果迭代器需要执行一些清洁或释放资源的操作，可以在.return()方法中实现。大多数迭代器方法无须实现这一方法。.throw(exc)方法的使用场景就更特殊了：for-of循环永远不会调用它。但是我们还是会在下一篇文章更详细地讲解它的作用。

    // 现在我们已了解所有细节，可以写一个简单的for-of循环然后按照下面的方法调用重写被迭代的对象。

    // 首先是for-of循环：


    // for (VAR of ITERABLE) {
    //   一些语句
    // }

    // 然后是一个使用以下方法和少许临时变量实现的与之前大致相当的示例，：

    // var $iterator = ITERABLE[Symbol.iterator]();
    // var $result = $iterator.next();

    // while (!$result.done) {
    //     var result = $result.value;
    //     console.log(result);
    //     $result = $iterator.next();
    // }

    // 这段代码没有展示.return()方法是如何处理的，我们可以添加这部分代码，但我认为这对于我们正在讲解的内容来说过于复杂了。for-of循环用起来很简单，但是其背后有着非常复杂的机制。
}

export default iteratorsAndTheForOfLoop;
