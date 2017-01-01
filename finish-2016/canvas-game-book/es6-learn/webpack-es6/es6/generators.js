function* quips(name) {
    yield "你好 " + name + "!";
    yield "希望你能喜欢这篇介绍ES6的译文";
    if (name.startsWith("X")) {
        yield "你的名字 " + name + "  首字母是X，这很酷！";
    }
    yield "我们下次再见！";
}

var generators = function() {
    console.info('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');

    // 这段代码看起来很像一个函数，我们称之为生成器函数，它与普通函数有很多共同点，但是二者有如下区别：

    // 普通函数使用function声明，而生成器函数使用function*声明。
    // 在生成器函数内部，有一种类似return的语法：关键字yield。二者的区别是，普通函数只可以return一次，而生成器函数可以yield多次（当然也可以只yield一次）。在生成器的执行过程中，遇到yield表达式立即暂停，后续可恢复执行状态。

    // 这就是普通函数和生成器函数之间最大的区别，普通函数不能自暂停，生成器函数可以。
    var my_quips = quips('Xiong');
    console.log(my_quips);

    console.log(my_quips.next());
    console.log(my_quips.next());
    console.log(my_quips.next());
    console.log(my_quips.next());
    console.log(my_quips.next());

    // 你大概已经习惯了普通函数的使用方式，当你调用它们时，它们立即开始运行，直到遇到return或抛出异常时才退出执行，作为JS程序员你一定深谙此道。

    // 生成器调用看起来非常类似：quips("jorendorff")。但是，当你调用一个生成器时，它并非立即执行，而是返回一个已暂停的生成器对象（上述实例代码中的iter）。你可将这个生成器对象视为一次函数调用，只不过立即冻结了，它恰好在生成器函数的最顶端的第一行代码之前冻结了。

    // 每当你调用生成器对象的.next()方法时，函数调用将其自身解冻并一直运行到下一个yield表达式，再次暂停。

    // 这也是在上述代码中我们每次都调用iter.next()的原因，我们获得了quips()函数体中yield表达式生成的不同的字符串值。

    // 调用最后一个iter.next()时，我们最终抵达生成器函数的末尾，所以返回结果中done的值为true。抵达函数的末尾意味着没有返回值，所以返回结果中value的值为undefined。

    // 如果用专业术语描述，每当生成器执行yields语句，生成器的堆栈结构（本地变量、参数、临时值、生成器内部当前的执行位置）被移出堆栈。然而，生成器对象保留了对这个堆栈结构的引用（备份），所以稍后调用.next()可以重新激活堆栈结构并且继续执行。

    // 值得特别一提的是，生成器不是线程，在支持线程的语言中，多段代码可以同时运行，通通常导致竞态条件和非确定性，不过同时也带来不错的性能。生成器则完全不同。当生成器运行时，它和调用者处于同一线程中，拥有确定的连续执行顺序，永不并发。与系统线程不同的是，生成器只有在其函数体内标记为yield的点才会暂停。

    // 现在，我们了解了生成器的原理，领略过生成器的运行、暂停恢复运行的不同状态。那么，这些奇怪的功能究竟有何用处？

    // 实现一个接口不是一桩小事，我们一起实现一个迭代器。举个例子，我们创建一个简单的range迭代器，它可以简单地将两个数字之间的所有数相加。首先是传统C的for(;;)循环：

    class RangeIterator {
        constructor(start, stop) {
            this.value = start;
            this.stop = stop;
        }

        [Symbol.iterator]() {
            return this;
        }

        next() {
            var value = this.value;
            if (value < this.stop) {
                this.value++;
                return {
                    done: false,
                    value: value
                }
            } else {
                return {
                    done: true,
                    value: undefined
                }
            }
        }
    }

    function range(start, stop) {
        return new RangeIterator(start, stop);
    }


    for (var value of range(0, 3)) {
        console.log("Ding!at floor #" + value);
    }

    //     这里的实现类似Java或Swift中的迭代器，不是很糟糕，但也不是完全没有问题。我们很难说清这段代码中是否有bug，这段代码看起来完全不像我们试图模仿的传统for (;;)循环，迭代器协议迫使我们拆解掉循环部分。

    // 此时此刻你对迭代器可能尚无感觉，他们用起来很酷，但看起来有些难以实现。

    // 你大概不会为了使迭代器更易于构建从而建议我们为JS语言引入一个离奇古怪又野蛮的新型控制流结构，但是既然我们有生成器，是否可以在这里应用它们呢？一起尝试一下：

    function* range2(start, stop) {
        for (var i = start; i < stop; i++) {
            yield i;
        }
    }

    for (var value of range2(0, 3)) {
        console.log("Ding!at floor #" + value);
    }


    //     以上4行代码实现的生成器完全可以替代之前引入了一整个RangeIterator类的23行代码的实现。可行的原因是：生成器是迭代器。所有的生成器都有内建.next()和[Symbol.iterator]()方法的实现。你只须编写循环部分的行为。

    // 我们都非常讨厌被迫用被动语态写一封很长的邮件，不借助生成器实现迭代器的过程与之类似，令人痛苦不堪。当你的语言不再简练，说出的话就会变得难以理解。RangeIterator的实现代码很长并且非常奇怪，因为你需要在不借助循环语法的前提下为它添加循环功能的描述。所以生成器是最好的解决方案！

    // 我们如何发挥作为迭代器的生成器所产生的最大效力？


    // l 使任意对象可迭代。编写生成器函数遍历这个对象，运行时yield每一个值。然后将这个生成器函数作为这个对象的[Symbol.iterator]方法。

    // l 简化数组构建函数。假设你有一个函数，每次调用的时候返回一个数组结果，就像这样：

    function splitIntoRows(icons, rowLength) {
        var rows = [];
        for (var i = 0; i < icons.length; i += rowLength) {
            rows.push(icons.slice(i, i + rowLength));
        }
        return rows;
    }

    // 使用生成器创建的代码相对较短：

    function* splitIntoRows2(icons, rowLength) {
        for (var i = 0; i < icons.length; i += rowLength) {
            yield icons.slice(i, i + rowLength);
        }
    }

    // 行为上唯一的不同是，传统写法立即计算所有结果并返回一个数组类型的结果，使用生成器则返回一个迭代器，每次根据需要逐一地计算结果。

    // 获取异常尺寸的结果。你无法构建一个无限大的数组，但是你可以返回一个可以生成一个永无止境的序列的生成器，每次调用可以从中取任意数量的值。

    // 重构复杂循环。你是否写过又丑又大的函数？你是否愿意将其拆分为两个更简单的部分？现在，你的重构工具箱里有了新的利刃——生成器。当你面对一个复杂的循环时，你可以拆分出生成数据的代码，将其转换为独立的生成器函数，然后使用for (var data of myNewGenerator(args))遍历我们所需的数据。

    // 构建与迭代相关的工具。ES6不提供用来过滤、映射以及针对任意可迭代数据集进行特殊操作的扩展库。借助生成器，我们只须写几行代码就可以实现类似的工具。

    // 举个例子，假设你需要一个等效于Array.prototype.filter并且支持DOM NodeLists的方法，可以这样写：

    function* filter(test, iterable) {
        for (var item of iterable) {
            if (test(item)) {
                yield item;
            }
        }
    }

    // 你看，生成器魔力四射！借助它们的力量可以非常轻松地实现自定义迭代器，记住，迭代器贯穿ES6的始终，它是数据和循环的新标准。

    // 实验性的Q.async()尝试结合promises使用生成器产生异步代码的等效同步代码。举个例子：

    // 制造一些噪音的同步代码。
    function makeNoise() {
        shake();
        rattle();
        roll();
    }

    // 制造一些噪音的异步代码。
    // 返回一个Promise对象
    // 当我们制造完噪音的时候会变为resolved
    function makeNoise_async() {
        return Q.async(function*() {
            yield shake_async();
            yield rattle_async();
            yield roll_async();
        });
    }

    // 二者主要的区别是，异步版本必须在每次调用异步函数的地方添加yield关键字。

    // 在Q.async版本中添加一个类似if语句的判断或try/catch块，如同向同步版本中添加类似功能一样简单。与其它异步代码编写方法相比，这种方法更自然，不像是学一门新语言一样辛苦。

    // 文章学习
    // [A Study on Solving Callbacks with JavaScript Generators](http://jlongster.com/A-Study-on-Solving-Callbacks-with-JavaScript-Generators)

    function* foo(x) {
        yield x + 1;

        var y = yield null;

        return x + y;
    }

    var gen = foo(5);
    console.log(gen.next());
    console.log(gen.next());
    // console.log(gen.send(8));

}

export default generators;
