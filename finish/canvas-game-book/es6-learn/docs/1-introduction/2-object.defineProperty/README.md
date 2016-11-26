Object.defineProperty() 方法直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。


    Object.defineProperty(obj, prop, descriptor)

参数

obj

需要定义属性的对象。

prop

需被定义或修改的属性名。

descriptor

需被定义或修改的属性的描述符。

该方法允许精确添加或修改对象的属性。一般情况下，我们为对象添加属性是通过赋值来创建并显示在属性枚举中（for...in 或 Object.keys 方法）， 但这种方式添加的属性值可以被改变，也可以被删除。而使用 Object.defineProperty() 则允许改变这些额外细节的默认设置。例如，默认情况下，使用  Object.defineProperty() 增加的属性值是不可改变的。

对象里目前存在的属性描述符有两种主要形式：数据描述符和存取描述符。数据描述符是一个拥有可写或不可写值的属性。存取描述符是由一对 getter-setter 函数功能来描述的属性。描述符必须是两种形式之一；不能同时是两者。

数据描述符和存取描述符均具有以下可选键值：

configurable
当且仅当该属性的 configurable 为 true 时，该属性才能够被改变，也能够被删除。默认为 false。

enumerable
当且仅当该属性的 enumerable 为 true 时，该属性才能够出现在对象的枚举属性中。默认为 false。
数据描述符同时具有以下可选键值：


value
该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。

writable
当且仅当仅当该属性的writable为 true 时，该属性才能被赋值运算符改变。默认为 false。

存取描述符同时具有以下可选键值：

get
一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。该方法返回值被用作属性值。默认为undefined。

set
一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。该方法将接受唯一参数，并将该参数的新值分配给该属性。默认为undefined。
记住，这些选项不一定是自身属性，如果是继承来的也要考虑。为了确认保留这些默认值，你可能要在这之前冻结Object.prototype，明确指定所有的选项，或者将__proto__属性指向null。
