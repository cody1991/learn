function destructuring() {
    let someArray = [1, 2, 3];

    let [first, second, third] = someArray;

    console.log('destructuring : ', first, second, third);

    let someArray2 = [1, [
        [2], 3
    ]];

    var [foo, [
        [bar], baz
    ]] = someArray2;

    console.log('destructuring2 : ', foo, bar, baz);

    let [, , third2] = someArray;

    console.log(third2);

    let [head, ...tail] = [1, 2, 3, 4, 5];

    console.log(head, tail);

    // function* fibs()

    function* fibs() {
        var a = 0;
        var b = 1;

        while (true) {
            yield a;
            [a, b] = [b, a + b];
            console.log(a, b);
        }
    }

    var [fibs1, fibs2, fibs3, fibs4, fibs5] = fibs();

    console.log(fibs1, fibs2, fibs3, fibs4, fibs5);

    let robotA = {
        name: 'Bender'
    };
    let robotB = {
        name: 'Flexo'
    };

    let {
        name: nameA
    } = robotA;
    let {
        name: nameB
    } = robotB;

    console.log(nameA, nameB);

    let complicatedObj = {
        arrayProp: [
            "Zapp", {
                com2: 'Brannigan'
            }
        ]
    };

    let {
        arrayProp: [com1, {
            com2
        }]
    } = complicatedObj;

    console.log(com1, com2);

    var [missing = true] = [];
    console.log(missing);

    var {
        message: msg = "Something went wrong"
    } = {};
    console.log(msg);

    var {
        x = 3
    } = {};
    console.log(x);

    // 作 为开发者，我们需要实现设计良好的API，通常的做法是为函数为函数设计一个对象作为参数，然后将不同的实际参数作为对象属性，以避免让API使用者记住 多个参数的使用顺序。我们可以使用解构特性来避免这种问题，当我们想要引用它的其中一个属性时，大可不必反复使用这种单一参数对象。
    function removeBreakPoint({
        url,
        line,
        column
    }) {

    }

    // 延伸一下之前的示例，我们同样可以给需要解构的对象属性赋予默认值。当我们构造一个提供配置的对象，并且需要这个对象的属性携带默认值时，解构特性就派上用场了。举个例子，jQuery的ajax函数使用一个配置对象作为它的第二参数，我们可以这样重写函数定义：

    // 如此一来，我们可以避免对配置对象的每个属性都重复var foo = config.foo || theDefaultFoo;这样的操作。
    let JQuery = {};
    JQuery.ajax = function(url, {
        async = true,
        beforeSend = noop,
        cache = true,
        complete = noop,
        crossDomain = false,
        global = true
    }) {

    }

    var map = new Map();
    map.set(window, 'the global');
    map.set(document, 'the document');

    for (var [key, value] of map) {
        console.log(key + ' is ' + value);
    }

    for (var [key] of map) {

    }

    for (var [, key] of map) {

    }

    function returnMultipleValues() {
        return [1, 2];
    }

    var [mul1, mul2] = returnMultipleValues();

    console.log(mul1, mul2);

    function returnMultipleValues2() {
        return {
            foo: 1,
            bar: 2
        };
    }

    var {
        foo,
        bar
    } = returnMultipleValues2();

    console.log(foo, bar)

}
export default destructuring;
