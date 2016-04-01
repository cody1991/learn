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
"use strict";