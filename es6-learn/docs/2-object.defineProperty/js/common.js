(function() {
    // 如果对象中不存在指定的属性，Object.defineProperty()就创建这个属性。当描述符中省略某些字段时，这些字段将使用它们的默认值。拥有布尔值的字段的默认值都是false。value，get和set字段的默认值为undefined。定义属性时如果没有get/set/value/writable，那它被归类为数据描述符。
    var o = {};

    Object.defineProperty(o, 'a', {
        value: 37,
        writable: true,
        enumerable: true,
        configurable: true
    });

    console.log(o);

    var bValue;

    Object.defineProperty(o, 'b', {
        get: function() {
            return bValue;
        },
        set: function(newValue) {
            bValue = newValue;
        },
        enumerable: true,
        configurable: true
    });

    o.b = 38;

    console.log(o);

    // 如果属性已经存在，Object.defineProperty()将尝试根据描述符中的值以及对象当前的配置来修改这个属性。如果描述符的 configurable 特性为false（即该特性为non-configurable），那么除了 writable 外，其他特性都不能被修改，并且数据和存取描述符也不能相互切换。

    // 如果一个属性的 configurable 为 false，则其 writable 特性也只能修改为 false。

    // 如果尝试修改 non-configurable 属性特性（除 writable 以外），将会产生一个TypeError 异常，除非当前值与修改值相同。

    // Writable 属性

    // 当属性特性（property attribute） writable 设置为false时，表示 non-writable，属性不能被修改。


    // --------------------


    // 属性特性 enumerable 定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。

    var o2 = {};
    Object.defineProperty(o2, 'a', {
        value: 1,
        enumerable: true
    });
    Object.defineProperty(o2, 'b', {
        value: 1,
        enumerable: true
    });
    Object.defineProperty(o2, 'c', {
        value: 1,
    });

    for (var i in o2) {
        console.log(i);
    }

    console.log(Object.keys(o2));

    console.log(o2.propertyIsEnumerable('a'));

    // configurable 特性表示对象的属性是否可以被删除，以及除 writable 特性外的其他特性是否可以被修改。

})();
