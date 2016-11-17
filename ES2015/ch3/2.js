const foo = {
    a: 1
}

foo.b = 2;

console.log(foo);

const obj1 = Object.freeze({
    a: 1,
    b: 2
});

// 修改不了
obj1.a = 2;

console.log(obj1);

// 但是对象下面的对象还是可以改变

Object.deepFreeze = function(obj) {
    var propNames = Object.getOwnPropertyNames(obj);
    console.log(propNames);

    propNames.forEach(function(name) {
        // console.log(name);
        var prop = obj[name];
        if (typeof prop == 'object' && prop != null) {
            Object.deepFreeze(prop);
        }
    });

    return Object.freeze(obj);
}

const obj2 = Object.deepFreeze({
    d: 1,
    a: {
        b: {
            c: 1
        }
    }
});

console.log(obj2);

obj2.a.b.c = 2;

console.log(obj2);
