let collections = function() {
    // 熟悉JS一定会知道，我们已经有了一种类似哈希表的东西：对象（Object）。

    // 一个普通的对象毕竟就只是一个开放的键值对集合。你可以进行获取、设置、删除、遍历——任何一个哈希表支持的操作。所以我们到底为什么要增加新的特性？

    // 好吧，大多数程序简单地用对象来存储键值对就够了，对它们而言，没什么必要换用Map或Set。但是，直接这样使用对象有一些广为人知的问题：

    // 作为查询表使用的对象，不能既支持方法又保证避免冲突。

    // 因而，要么得用Object.create(null)而非直接写{}，要么得小心地避免把Object.prototype.toString之类的内置方法名作为键名来存储数据。

    // 对象的键名总是字符串（当然，ES6 中也可以是Symbol）而不能是另一个对象。

    // 没有有效的获知属性个数的方法。

    // ES6中又出现了新问题：纯粹的对象不可遍历，也就是，它们不能配合for-of循环或...操作符等语法。

    // 嗯，确实很多程序里这些问题都不重要，直接用纯对象仍然是正确的选择。Map和Set是为其它场合准备的。

    // 这些ES6中的集合本来就是为避免用户数据与内置方法冲突而设计的，所以它们不会把数据作为属性暴露出来。也就是说，obj.key或obj[key]不能再用来访问数据了，取而代之的是map.get(key)。同时，不像属性，哈希表的键值不能通过原型链来继承了。

    // 好消息是，不像纯粹的Object，Map和Set有自己的方法了，并且，更多标准或自定义的方法可以无需担心冲突地加入。

    var set1 = new Set("123");

    // 一个Set是一群值的集合。它是可变的，能够增删元素。现在，还没说到它和数组的区别，不过它们的区别就和相似点一样多。

    // 首先，和数组不同，一个Set不会包含相同元素。试图再次加入一个已有元素不会产生任何效果。

    console.log(set1.size);

    set1.add('3');

    console.log(set1.size);

    // 这个例子里元素都是字符串，不过Set是可以包含JS中任何类型的值的。同样，重复加入已有元素不会产生效果。

    // 其次，Set的数据存储结构专门为一种操作作了速度优化：包含性检测。

    // > // 检查"zythum"是不是一个单词
    // > arrayOfWords.indexOf("zythum") !== -1  // 慢
    //     true
    // > setOfWords.has("zythum")               // 快
    //     true

    // Set不能提供的则是索引。

    // > arrayOfWords[15000]
    //     "anapanapa"
    // > setOfWords[15000]   // Set不支持索引
    //     undefined

    //     以下是Set支持的所有操作：

    // new Set：创建一个新的、空的Set。
    // new Set(iterable)：从任何可遍历数据中提取元素，构造出一个新的集合。
    // set.size：获取集合的大小，即其中元素的个数。
    // set.has(value)：判定集合中是否含有指定元素，返回一个布尔值。
    // set.add(value)：添加元素。如果与已有重复，则不产生效果。

    // set.delete(value)：删除元素。如果并不存在，则不产生效果。

    // set[Symbol.iterator]()：返回一个新的遍历整个集合的迭代器。一般这个方法不会被直接调用，因为实际上就是它使集合能够被遍历，也就是说，我们可以直接写for (v of set) {...}等等。

    // set.forEach(f)：直接用代码来解释好了，它就像是for (let value of set) { f(value, value, set); }的简写，类似于数组的.forEach()方法。

    // set.clear()：清空集合。

    // set.keys()、set.values()和set.entries()返回各种迭代器，它们是为了兼容Map而提供的，所以我们待会儿再来看。

    var myarray = [1, 2, 3, 4, 5, 6, 1, 2, 3];

    var set2 = new Set(myarray);

    console.log(set2);

    console.log(set2.size);
    console.log(set2.has(1));
    console.log(set2.has(8));

    console.log(set2.add(8));
    console.log(set2.size);
    console.log(set2.delete(1));

    set2.forEach(function(ele) {
        console.log(ele);
    });

    set2.clear();

    console.log(set2);

    set2.add(5).add(7).add(4);

    console.log(set2);
    console.log(set2.keys());
    console.log(set2.values());
    console.log(set2.entries());


    //     Map
    // 一个Map对象由若干键值对组成，支持：

    // new Map：返回一个新的、空的Map。
    // new Map(pairs)：根据所含元素形如[key, value]的数组pairs来创建一个新的Map。这里提供的pairs可以是一个已有的Map 对象，可以是一个由二元数组组成的数组，也可以是逐个生成二元数组的一个生成器，等等。
    // map.size：返回Map中项目的个数。
    // map.has(key)：测试一个键名是否存在，类似key in obj。
    // map.get(key)：返回一个键名对应的值，若键名不存在则返回undefined，类似obj[key]。
    // map.set(key, value)：添加一对新的键值对，如果键名已存在就覆盖。
    // map.delete(key)：按键名删除一项，类似delete obj[key]。
    // map.clear()：清空Map。
    // map[Symbol.iterator]()：返回遍历所有项的迭代器，每项用一个键和值组成的二元数组表示。
    // map.forEach(f) 类似for (let [key, value] of map) { f(value, key, map); }。这里诡异的参数顺序，和Set中一样，是对应着Array.prototype.forEach()。
    // map.keys()：返回遍历所有键的迭代器。
    // map.values()：返回遍历所有值的迭代器。
    // map.entries()：返回遍历所有项的迭代器，就像map[Symbol.iterator]()。实际上，它们就是同一个方法，不同名字。


    // -----------------------------------------------------


    //     WeakMap和WeakSet
    // WeakMap和WeakSet被设计来完成与Map、Set几乎一样的行为，除了以下一些限制：

    // WeakSet只支持new、has、add和delete。
    // WeakMap只支持new、has、get、set 和delete。
    // WeakSet的值和WeakMap的键必须是对象。
    // 还要注意，这两种弱集合都不可迭代，除非专门查询或给出你感兴趣的键，否则不能获得一个弱集合中的项。

};


export default collections;
