'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ' world ', ''], ['Hello ', ' world ', '']),
    _templateObject2 = _taggedTemplateLiteral(['The total is ', ' (', ' with tax)'], ['The total is ', ' (', ' with tax)']),
    _templateObject3 = _taggedTemplateLiteral(['<p>', ' has sent you a message.</p>'], ['<p>', ' has sent you a message.</p>']),
    _templateObject4 = _taggedTemplateLiteral(['Hi\n', '!'], ['Hi\\n', '!']),
    _templateObject5 = _taggedTemplateLiteral(['Hi\n!'], ['Hi\\u000A!']),
    _templateObject6 = _taggedTemplateLiteral(['Hi\\n'], ['Hi\\\\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// console.log("\u20bb7")
// console.log("\u{20bb7}")

// var s = '𠮷a';

// console.log(s.length);
// console.log(s.charAt(0));
// console.log(s.charAt(1));
// console.log(s.charCodeAt(0));
// console.log(s.charCodeAt(1));
// console.log(s.charCodeAt(2));

// console.log(s.codePointAt(0))
// console.log(s.codePointAt(1))
// console.log(s.codePointAt(2))

// // codePointAt方法的参数，是字符在字符串中的位置（从0开始）。上面代码中，JavaScript将“𠮷a”视为三个字符，codePointAt方法在第一个字符上，正确地识别了“𠮷”，返回了它的十进制码点134071（即十六进制的20BB7）。在第二个字符（即“𠮷”的后两个字节）和第三个字符“a”上，codePointAt方法的结果与charCodeAt方法相同。

// // 总之，codePointAt方法会正确返回32位的UTF-16字符的码点。对于那些两个字节储存的常规字符，它的返回结果与charCodeAt方法相同。

// // codePointAt方法返回的是码点的十进制值，如果想要十六进制的值，可以使用toString方法转换一下。

// console.log(s.codePointAt(0).toString(16))
// console.log(s.codePointAt(1).toString(16))
// console.log(s.codePointAt(2).toString(16))

// for (let ch of s) {
//     console.log(ch);
//     console.log(ch.codePointAt(0).toString(16));
// }

// --------------------

// 遍历接口
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = 'foo'[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var codePoint = _step.value;

        console.log(codePoint);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var s = 'Hello world!';

console.log(s.indexOf('ll'));
console.log(s.includes('world', 6));
console.log(s.startsWith('world', 6));
console.log(s.endsWith('Hello', 5));

// includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。

// 这三个方法都支持第二个参数，表示开始搜索的位置。

// 上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。

// ------------------------------------------------------------

// ES7推出了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart用于头部补全，padEnd用于尾部补全。

// 'x'.padStart(5, 'ab') // 'ababx'
// 'x'.padStart(4, 'ab') // 'abax'
// 'x'.padEnd(5, 'ab') // 'xabab'
// 'x'.padEnd(4, 'ab') // 'xaba'

// 上面代码中，padStart和padEnd一共接受两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。

// 如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。

// 'xxx'.padStart(2, 'ab') // 'xxx'
// 'xxx'.padEnd(2, 'ab') // 'xxx'

// 如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。

// 'abc'.padStart(10, '0123456789')
// '0123456abc'

// 如果省略第二个参数，则会用空格补全长度。

// 'x'.padStart(4) // '   x'
// 'x'.padEnd(4) // 'x   '

// padStart的常见用途是为数值补全指定位数。下面代码生成10位的数值字符串。

// '1'.padStart(10, '0') // "0000000001"
// '12'.padStart(10, '0') // "0000000012"
// '123456'.padStart(10, '0') // "0000123456"

// 另一个用途是提示字符串格式。

// '12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
// '09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"

// -------------------------------------------------------------------------------------------------------

// 传统的JavaScript语言，输出模板通常是这样写的。

// $("#result").append(
//     "There are <b>" + basket.count + "</b> " +
//     "items in your basket, " +
//     "<em>" + basket.onSale +
//     "</em> are on sale!"
// );

// 上面这种写法相当繁琐不方便，ES6引入了模板字符串解决这个问题。

// $("#result").append(`
//   There are <b>${basket.count}</b> items
//    in your basket, <em>${basket.onSale}</em>
//   are on sale!
// `);

// 模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。

console.log('In javascript \'\n\' is a line-feed');

console.log('In javascript this is\n    not legal');

var name = 'Bob',
    time = 'today';

console.log(' ` Hello ' + name + ' , how are you ' + time);

var x = 1,
    y = 2;

console.log(x + ' + ' + y + ' = ' + (x + y));
console.log(x + ' + ' + y * 2 + ' = ' + (x + y * 2));

var obj = {
    x: 1,
    y: 2
};

console.log('' + (obj.x + obj.y));

function fn() {
    return 'Hello world!';
}

console.log('foo ' + fn() + ' bar');

var data = {
    supplies: ['c', 'o', 'd', 'y']
};
var template = '\n    <ul>\n        <% for(var i = 0; i < data.supplies.length; i++) { %>\n            <li> <%= data.supplies[i] %></li>\n        <% } %>\n    </ul>\n';

// 转换成

// echo('<ul>');
// for (var i = 0; i < data.supplies.length; i++) {
//     echo('<li>');
//     echo(data.supplies[i]);
//     echo('</li>');
// };
// echo('</ul>');

function compile(template) {
    var evalExpr = /<%=(.+?)%>/g;
    var expr = /<%([\s\S]+?)%>/g;

    template = template.replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`').replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    var script = '(function parse(data){\n    var output = "";\n\n    function echo(html){\n      output += html;\n    }\n\n    ' + template + '\n\n    return output;\n  })';

    return script;
}

var parse = eval(compile(template));
console.log(parse({
    supplies: ["broom", "mop", "cleaner"]
}));
//   <ul>
//     <li>broom</li>
//     <li>mop</li>
//     <li>cleaner</li>
//   </ul>

var c = 5;
var d = 10;

// tag函数的第一个参数是一个数组，该数组的成员是模板字符串中那些没有变量替换的部分，也就是说，变量替换只发生在数组的第一个成员与第二个成员之间、第二个成员与第三个成员之间，以此类推。

// tag函数的其他参数，都是模板字符串各个变量被替换后的值。由于本例中，模板字符串含有两个变量，因此tag会接受到value1和value2两个参数。

// tag函数所有参数的实际值如下。

// 第一个参数：['Hello ', ' world ', '']
// 第二个参数: 15
// 第三个参数：50
// 也就是说，tag函数实际上以下面的形式调用。

var a = 5;
var b = 10;

function tag(s, v1, v2) {
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);
    console.log(v1);
    console.log(v2);

    return "OK";
}

tag(_templateObject, a + b, a * b);

var total = 30;
var msg = passthru(_templateObject2, total, total * 1.05);

// function passthru(literals) {
//     console.log(literals);
//     console.log(arguments);

//     var result = '';
//     var i = 0;

//     while (i < literals.length) {

//         result += literals[i++];

//         if (i < arguments.length) {

//             result += arguments[i];
//         }
//     }
//     return result;
// }

function passthru(literals) {
    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    console.log(literals, values);
    var output = '';
    for (var index = 0; index < values.length; index++) {
        output += literals[index] + values[index];
    }

    output += literals[index];
    return output;
}

console.log(msg);

var sender = 'cody';
var message = SaferHTML(_templateObject3, sender);

function SaferHTML(templateData) {
    console.log('templateData : ');
    console.log(templateData);
    console.log('arguments : ');
    console.log(arguments);
    for (var i = 0; i < arguments.length; i++) {
        var arg = String(arguments[i]);

        s += arg.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

        s += templateData[i];
    }

    console.log(s);
}

console.log(String.raw(_templateObject4, 2 + 3));
console.log(String.raw(_templateObject5));
console.log(String.raw(_templateObject6));

// String.raw方法可以作为处理模板字符串的基本方法，它会将所有变量替换，而且对斜杠进行转义，方便下一步作为字符串来使用。

console.log(String.raw({
    raw: 'test'
}, 0, 1, 2));

console.log(String.raw({
    raw: ['t', 'e', 's', 't']
}, 0, 1, 2));