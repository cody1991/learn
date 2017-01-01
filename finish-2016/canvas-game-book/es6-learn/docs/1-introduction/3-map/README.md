map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组

array.map(callback[, thisArg])

callback
原数组中的元素经过该方法后返回一个新的元素。

currentValue
callback 的第一个参数，数组中当前被传递的元素。

index
callback 的第二个参数，数组中当前被传递的元素的索引。

array
callback 的第三个参数，调用 map 方法的数组。

thisArg
执行 callback 函数时 this 指向的对象。

map 方法会给原数组中的每个元素都按顺序调用一次 callback 函数。callback 每次执行后的返回值组合起来形成一个新数组。 callback 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 delete 删除的索引则不会被调用。

callback 函数会被自动传入三个参数：数组元素，元素索引，原数组本身。

如果 thisArg 参数有值，则每次 callback 函数被调用的时候，this 都会指向 thisArg 参数上的这个对象。如果省略了 thisArg 参数,或者赋值为 null 或 undefined，则 this 指向全局对象 。

map 不修改调用它的原数组本身（当然可以在 callback 执行时改变原数组）。

使用 map 方法处理数组时，数组元素的范围是在 callback 方法第一次调用之前就已经确定了。在 map 方法执行的过程中：原数组中新增加的元素将不会被 callback 访问到；若已经存在的元素被改变或删除了，则它们的传递到 callback 的值是 map 方法遍历到它们的那一时刻的值；而被删除的元素将不会被访问到。

