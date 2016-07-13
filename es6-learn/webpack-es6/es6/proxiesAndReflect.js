var proxiesAndReflect = function() {
    var obj = new Proxy({}, {
        get: function(target, key, receiver) {
            console.log(`getting ${key}!`);

            return Reflect.get(target, key, receiver);
        },
        set: function(target, key, value, receiver) {
            console.log(`setting ${key}!`);

            return Reflect.set(target, key, value, receiver);
        }
    });

    obj.count = 1;
    ++obj.count;

    // 显示结果可能与我们的理解不太一样，为什么会输出“setting count”和“getting count”？其实，我们拦截了这个对象的属性访问方法，然后将“.”运算符重载了。

    //     那么我们就跟随ECMAScript标准委员会的脚步，为JavaScript对象定义一个API，一个接口。问题是我们需要什么方法？对象又可以做什么呢？

    // 这个问题的答案一定程度上取决于对象的类型：DOM元素对象可以做一部分事情，音频节点对象又可以做另外一部分事情，但是所有对象都会共享一些基础功能：

    // 对象都有属性。你可以get、set或删除它们或做更多操作。
    // 对象都有原型。这也是JS中继承特性的实现方式。
    // 有一些对象是可以被调用的函数或构造函数。

    // 几乎所有处理对象的JS程序都是使用属性、原型和函数来完成的。甚至元素或声音节点对象的特殊行为也是通过调用继承自函数属性的方法来进行访问。

    // 所以ECMAScript标准委员会定义了一个由14种内部方法组成的集合，亦即一个适用于所有对象的通用接口，属性、原型和函数这三种基础功能自然成为它们关注的核心。

    // -------------------------------

    // 我们可以在ES6标准列表5和6中找到全部的14种方法，我只会在这里讲解其中一部分。双方括号[[ ]]代表内部方法，在一般的JS代码中不可见，你可以调用、删除或覆写普通方法，但是无法操作内部方法。

    // obj.[[Get]](key, receiver) – 获取属性值。

    // 当JS代码执行以下方法时被调用：obj.prop或obj[key]。

    // obj是当前被搜索的对象，receiver是我们首先开始搜索这个属性的对象。有时我们必须要搜索几个对象，obj可能是一个在receiver原型链上的对象。

    // obj.[[Set]](key, value, receiver) – 为对象的属性赋值。

    // 当JS代码执行以下方法时被调用：obj.prop = value或obj[key] = value。

    // 执行类似obj.prop += 2这样的赋值语句时，首先调用[[Get]]方法，然后调用[[Set]]方法。对于++和--操作符来说亦是如此。

    // obj.[HasProperty] – 检测对象中是否存在某属性。

    // 当JS代码执行以下方法时被调用：key in obj。

    // obj.[Enumerate] – 列举对象的可枚举属性。

    // 当JS代码执行以下方法时被调用：for (key in obj) …

    // 这个内部方法会返回一个可迭代对象，for-in循环可通过这个方法得到对象属性的名称。

    // obj.[GetPrototypeOf] – 返回对象的原型。

    // 当JS代码执行以下方法时被调用：obj.[__proto__]或Object.getPrototypeOf(obj)。

    // functionObj.[[Call]](thisValue, arguments) – 调用一个函数。

    // 当JS代码执行以下方法时被调用：functionObj()或x.method()。

    // 可选的。不是每一个对象都是函数。

    // constructorObj.[[Construct]](arguments, newTarget) – 调用一个构造函数。

    // 当JS代码执行以下方法时被调用：举个例子，new Date(2890, 6, 2)。

    // 可选的。不是每一个对象都是构造函数。

    // 参数newTarget在子类中起一定作用，我们将在未来的文章中详细讲解。

    // ----------

    // 请记住，我们要讨论的是诸如obj.prop的核心语法、诸如Object.keys()的内建函数等的行为。

    // ES6规范定义了一个全新的全局构造函数：代理（Proxy）。它可以接受两个参数：目标对象（target）与句柄对象（handler）。

    var target = {},
        handler = {};

    var proxy = new Proxy(target, handler);

    // 我们先来探讨代理和目标对象之间的关系，然后再研究句柄对象的功用。

    // 代理的行为很简单：将代理的所有内部方法转发至目标。简单来说，如果调用proxy.[[Enumerate]]()，就会返回target.[[Enumerate]]()。

    // 现在，让我们尝试执行一条能够触发调用proxy.[[Set]]()方法的语句。

    proxy.color = 'pink';

    // 好的，刚刚都发生了什么？proxy.[[Set]]()应该调用target.[[Set]]()方法，然后在目标上创建一个新的属性。实际的结果如何？

    console.log(target.color);

    // 是的，它做到了！对于所有其它内部方法而言同样可以做到。新创建的代理会尽可能与目标的行为一致。

    // 当然，它们也不完全相同，你会发现proxy !== target。有时也有目标能够通过类型检测而代理无法通过的情况发生，举个例子，如果代理的目标是一个DOM元素，相应的代理就不是，此时类似document.body.appendChild(proxy)的操作会触发类型错误（TypeError）。

    // 句柄对象的方法可以覆写任意代理的内部方法。

    // 举个例子，你可以定义一个handler.set()方法来拦截所有给对象属性赋值的行为：

    handler.set = function(target, key, value, receiver) {
        console.info('请不要为这个对象设置属性。');
        return Reflect.set(target, key, value, receiver);
    }

    proxy.name = '12';

    // 到目前为止，我们对于代理的了解程度足够尝试去做一些奇怪的事情，实现一些不借助代理根本无法实现的功能。

    // 我们的第一个实践，创建一个Tree()函数来实现以下特性：

    // var tree = Tree();

    //     > var tree = Tree();
    // > tree
    //     { }
    // > tree.branch1.branch2.twig = "green";
    // > tree
    //     { branch1: { branch2: { twig: "green" } } }
    // > tree.branch1.branch3.twig = "yellow";
    //     { branch1: { branch2: { twig: "green" },
    //                  branch3: { twig: "yellow" }}}

    // 请注意，当我们需要时，所有中间对象branch1、branch2和branch3都可以自动创建。这固然很方便，但是如何实现呢？

    // 在这之前，没有可以实现这种特性的方法，但是通过代理，我们只用寥寥几行就可以轻松实现，然后只需要接入tree.[[Get]]()就可以。如果你喜欢挑战，在继续阅读前可以尝试自己实现。
    function Tree() {
        return new Proxy({}, treeHandler);
    }

    var treeHandler = {
        get: function(target, key, receiver) {
            if (!(key in target)) {
                target[key] = Tree();
            }
            return Reflect.get(target, key, receiver);
        }
    }

    var tree = Tree();

    console.log(tree);

    tree.branch1.branch2.twig = 'green';

    console.log(tree);

    // 注意最后的Reflect.get()调用，在代理句柄方法中有一个极其常见的需求：只执行委托给目标的默认行为。

    // --------------

    // 这一次我们的赋值语句更复杂：我们需要实现一个函数，readOnlyView(object)，它可以接受任何对象作为参数，并返回一个与此对象行为一致的代理，该代理不可被变更，就像这样：

    // > var newMath = readOnlyView(Math);
    // > newMath.min(54, 40);
    //     40
    // > newMath.max = Math.min;
    //     Error: can't modify read-only view
    // > delete newMath.sin;
    //     Error: can't modify read-only view

    function NOPE(target, key, receiver) {
        console.info("Can't modify read-only view");
        return Reflect.get(target, key, receiver);
    }

    var handler2 = {
        set: NOPE,
        defineProperty: NOPE,
        deleteProperty: NOPE,
        preventExtensions: NOPE,
        setPrototypeOf: NOPE,
        get: function(target, key, receiver) {
            // 从执行默认行为开始。
            var result = Reflect.get(target, key, receiver);

            // 确保返回一个不可变对象！
            if (Object(result) === result) {
                // result是一个对象。
                return readOnlyView(result);
            }

            // result是一个原始原始类型，所以已经具备不可变的性质。
            return result;
        }
    }

    function readOnlyView(target) {
        return new Proxy(target, handler2);
    }

    var newMath = readOnlyView(Math);

    console.log(newMath.min(54, 40));
    newMath.min = newMath.max;

    //     这段代码可以正常运行，它借助只读视图阻止了赋值、属性定义等过程。

    // 这种方案中是否有漏洞？

    // 最大的问题是类似[[Get]]的一些方法可能仍然返回可变对象，所以即使一些对象x是只读视图，x.prop可能是可变的！这是一个巨大的漏洞。

    // 我们需要添加一个handler.get()方法来堵上漏洞：

    // 这仍然不够，getPrototypeOf和getOwnPropertyDescriptor这两个方法也需要进行同样的处理。

    // 然而还有更多问题，当通过这种代理调用getter或方法时，传递给getter或方法的this的值通常是代理自身。但是正如我们之前所见，有时代理无法通过访问器和方法执行的类型检查。在这里用目标对象代替代理更好一些。聪明的小伙伴，你知道如何解决这个问题么？

    // 由此可见，创建代理非常简单，但是创建一个具有直观行为的代理相当困难。

};
export default proxiesAndReflect;
