// 第一种情况是，参数是字符串，这时第二个参数表示正则表达式的修饰符（flag）。
var regex = new RegExp('xyz', 'i');

// 等价于
// var regex = /xyz/i;

// 第二种情况是，参数是一个正则表示式，这时会返回一个原有正则表达式的拷贝。

// var regex = new RegExp(/xyz/i);

console.log(regex);


// 但是，ES5不允许此时使用第二个参数，添加修饰符，否则会报错。

// var regex = new RegExp(/xyz/, i);
// Uncaught TypeError: Cannot supply flags when constructing one RegExp from another
// ES6改变了这种行为。如果RegExp构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符。而且，返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符。

// new RegExp(/abc/ig, 'i').flags
// "i"
// 上面代码中，原有正则对象的修饰符是ig，它会被第二个参数i覆盖。


// 字符串对象共有4个方法，可以使用正则表达式：match()、replace()、search()和split()。

// ES6将这4个方法，在语言内部全部调用RegExp的实例方法，从而做到所有与正则相关的方法，全都定义在RegExp对象上。

// String.prototype.match 调用 RegExp.prototype[Symbol.match]
// String.prototype.replace 调用 RegExp.prototype[Symbol.replace]
// String.prototype.search 调用 RegExp.prototype[Symbol.search]
// String.prototype.split 调用 RegExp.prototype[Symbol.split]

console.log(/^\uD83D/u.test('\uD83D\uDC2A'));
console.log(/^\uD83D/.test('\uD83D\uDC2A'));

// 上面代码中，“\uD83D\uDC2A”是一个四个字节的UTF-16编码，代表一个字符。但是，ES5不支持四个字节的UTF-16编码，会将其识别为两个字符，导致第二行代码结果为true。加了u修饰符以后，ES6就会识别其为一个字符，所以第一行代码结果为false。

// 一旦加上u修饰符号，就会修改下面这些正则表达式的行为。

// 点（.）字符在正则表达式中，含义是除了换行符以外的任意单个字符。对于码点大于0xFFFF的Unicode字符，点字符不能识别，必须加上u修饰符。

var s = '𠮷';

console.log(/^.$/.test(s));
console.log(/^.$/u.test(s));

// ES6新增了使用大括号表示Unicode字符，这种表示法在正则表达式中必须加上u修饰符，才能识别。

console.log(/\u{61}/.test('a')) // false
    // 上面代码表示，如果不加u修饰符，正则表达式无法识别\u{61}这种表示法，只会认为这匹配61个连续的u。
console.log(/\u{61}/u.test('a')) // true
console.log(/\u{20BB7}/u.test('𠮷')) // true


// 使用u修饰符后，所有量词都会正确识别大于码点大于0xFFFF的Unicode字符。

console.log(/a{2}/.test('aa')) // true
console.log(/a{2}/u.test('aa')) // true
console.log(/𠮷{2}/.test('𠮷𠮷')) // false
console.log(/𠮷{2}/u.test('𠮷𠮷')) // true

// u修饰符也影响到预定义模式，能否正确识别码点大于0xFFFF的Unicode字符。

console.log(/^\S$/.test('𠮷')) // false
console.log(/^\S$/u.test('𠮷')) // true

// 上面代码的\S是预定义模式，匹配所有不是空格的字符。只有加了u修饰符，它才能正确匹配码点大于0xFFFF的Unicode字符。

// 利用这一点，可以写出一个正确返回字符串长度的函数。

function codePointLength(text) {
    var result = text.match(/[\s\S]/gu);
    console.log(result);

    return result ? result.length : 0;
}



var ss = '𠮷 𠮷';

console.log(ss.length);
console.log(codePointLength(ss));


// -------------------------------------
// y修饰符

// 除了u修饰符，ES6还为正则表达式添加了y修饰符，叫做“粘连”（sticky）修饰符。

// y修饰符的作用与g修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。不同之处在于，g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的涵义。

var s = 'aaa_aa_a';
var r1 = /a+/g;
// var r2 = /a+/y;

console.log(r1.exec(s));
console.log(r1.exec(s));
console.log(r1.exec(s));

// r2.exec(s) // ["aaa"]
// r2.exec(s) // null

// 上面代码有两个正则表达式，一个使用g修饰符，另一个使用y修饰符。这两个正则表达式各执行了两次，第一次执行的时候，两者行为相同，剩余字符串都是_aa_a。由于g修饰没有位置要求，所以第二次执行会返回结果，而y修饰符要求匹配必须从头部开始，所以返回null。

// 如果改一下正则表达式，保证每次都能头部匹配，y修饰符就会返回结果了。

// var s = 'aaa_aa_a';
// var r = /a+_/y;

// r.exec(s) // ["aaa_"]
// r.exec(s) // ["aa_"]


// ----------------------------------------------------

// 在split方法中使用y修饰符， 原字符串必须以分隔符开头。 这也意味着， 只要匹配成功， 数组的第一个成员肯定是空字符串。

// 没有找到匹配
// 'x##'.split(/#/y)
// [ 'x##' ]

// 找到两个匹配
// '##x'.split(/#/y)
// [ '', '', 'x' ]

// 后续的分隔符只有紧跟前面的分隔符，才会被识别。

// '#x#'.split(/#/y)
// [ '', 'x#' ]

// '##'.split(/#/y)
// [ '', '', '' ]

// 下面是字符串对象的replace方法的例子。

// const REGEX = /a/gy;
// 'aaxa'.replace(REGEX, '-') // '--xa'
// 上面代码中，最后一个a因为不是出现下一次匹配的头部，所以不会被替换。


// 与y修饰符相匹配，ES6的正则对象多了sticky属性，表示是否设置了y修饰符。

// var r = /hello\d/y;
// r.sticky // true

// ES6为正则表达式新增了flags属性，会返回正则表达式的修饰符。

// ES5的source属性
// 返回正则表达式的正文
// /abc/ig.source
// "abc"

// ES6的flags属性
// 返回正则表达式的修饰符
// /abc/ig.flags
// 'gi'

function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    // 上面代码中，str是一个正常字符串，必须使用反斜杠对其中的特殊字符转义，才能用来作为一个正则匹配的模式。
}

let str = '/path/to/resource.html?search=query';

console.log(escapeRegExp(str));


// RegExp.escape('The Quick Brown Fox');
// "The Quick Brown Fox"

// RegExp.escape('Buy it. use it. break it. fix it.');
// "Buy it\. use it\. break it\. fix it\."

// RegExp.escape('(*.*)');
// "\(\*\.\*\)"


// ----------------------------------------------------

// ”先行断言“指的是，x只有在y前面才匹配，必须写成/x(?=y)/。比如，只匹配百分号之前的数字，要写成/\d+(?=%)/。”先行否定断言“指的是，x只有不在y前面才匹配，必须写成/x(?!y)/。比如，只匹配不在百分号之前的数字，要写成/\d+(?!%)/。

console.log(/\d+(?=%)/.exec('100% of US'));
console.log(/\d+(?!%)/.exec('that’s all 44 of them'))

// 上面两个字符串，如果互换正则表达式，就会匹配失败。另外，还可以看到，”先行断言“括号之中的部分（(?=%)），是不计入返回结果的。

// "后行断言"正好与"先行断言"相反，x只有在y后面才匹配，必须写成/(?<=y)x/。比如，只匹配美元符号之后的数字，要写成/(?<=\$)\d+/。”后行否定断言“则与”先行否定断言“相反，x只有不在y后面才匹配，必须写成/(?<!y)x/。比如，只匹配不在美元符号后面的数字，要写成/(?<!\$)\d+/。

console.log(/(?<=\$)\d+/.exec('%100'));
