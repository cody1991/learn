var re = new RegExp('j.*t', 'gim');

console.log(re.global);

// var re = /j.*t/ig;
// rg.global => true

// 匹配 j开头的,t结尾的，两个字符之间包含0个或多个字符

// 其中 * 是0个或者多个单元

// .是任意字符

// global
// ignoreCase
// multiline
// lastIndex
// source
// 除了lastIndex 其他的设置了就不能修改了

// regexp对象有两种可以用于查找匹配内容的方法
// test() exec()
// test 返回一个布尔值 找到匹配内容返回 true
// exec 返回一个由匹配字符串组成的数组

console.log(/j.*t/.test('Javascript'));
console.log(/j.*t/i.test('Javascript'));
console.log(/j.*t/i.test('Jt'));

console.log(/j.*t/i.exec('jAVASCRIPT'));
console.log(/j.*t/ig.exec('jAVASCRIPTjaaat'));

// => ['jAVASCRIPT',index:0,input:'jAVASCRIPT']
// => ['jAVASCRIPTjaaat',index:0,input:'jAVASCRIPTjaaat']

// match()返回的是一个包含匹配内容的数组
// search()返回的是第一个匹配内容所在的位置
// replace()将匹配的文本替换成指定的字符串
// split()根据指定的正则表达式将目标字符串分割成若干个数组元素

var s = new String('HelloJavaScriptWorld');

console.log(s.match(/a/g));
console.log(s.match(/j.*a/i));

console.log(s.search(/j.*a/i));

console.log(s.replace(/[A-Z]/g, ''));

console.log(s.replace(/[A-Z]/g, '_$&'));

console.log(s.replace(/([A-Z])/g, "_$1"));

// 如果正则表达式分了组（呆了括号），可以使用$1表示匹配中的第一组，$2表示第二组

var email = 'cody1991@qq.com';
var username = email.replace(/(.*)@(.*)/, '$1');
console.log(username);

function replaceCallback(match) {
    return '_' + match.toLowerCase();
}

console.log(s);
console.log(s.replace(/[A-Z]/g, replaceCallback));

// 可以接受一系列的参数
// 首参数是正则表达式所匹配的内容
// 尾参数是被搜索的字符串
// 尾参数之前的参数表示匹配内容所在的位置的
// 剩下的参数可以是由regex模式所分组的所有匹配字符串组


var glob;
var re = /(.*)@(.*)\.(.*)/;

var callback = function() {
    glob = arguments;

    return arguments[1] + ' at ' + arguments[2] + ' dot ' + arguments[3];
}

console.log('476490767@qq.com'.replace(re, callback));

console.log(glob);

var csv = 'one, two, three,four';
console.log(csv.split(/\s*,\s*/));
