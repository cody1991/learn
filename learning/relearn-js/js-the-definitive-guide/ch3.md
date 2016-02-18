原始类型： 数字，字符串，布尔值

特殊的原始值，不是数字，字符串和布尔值， null undefined

剩下的都是对象了，每个属性由“名/值对”组成，值可以是原始值比如数字，字符串，也可以是对象。

普通的对象是命名值的无序集合，JS定义了一个特殊的对象---数组，表示带有编号的有序集合。

还有一个特殊的对象是 -- 函数，函数是具有和它有相关联的可执行代码的对象，通过调用函数来执行可执行代码，并返回运算结果。它们都是真值，而且JS把它们当做普通对象对待。

如果函数用来初始化（使用new）一个新建的对象，称之为构造函数（constructor）。每个构造函数定义了一类（class）对象---由构造函数初始化对象组成的集合。类可以看做是对象类型的子类型。

除了数组，函数，JS核心还定义了三个有用的类： Date,RegExp和Error

a.sort是 sort(a)的面向对象版本

数字，布尔，null，undefined是不可变类型，字符串可以看成是字符组成的数组，但是它是不可变的。

## 数字

不区分整数值和浮点数值，都用浮点数来表示。负号可以得到它的负值，但是这个是一元求反运算，不是数字直接量语言的组成部分。

	[digits][.digites][(E|e)[(+|-)]]digits]

---

	Math.pow(2,53)
	Math.round(.6) 四舍五入
	Math.ceil(.6) 向上
	Math.floor(.6) 向下
	Math.abs(-5)
	Math.max(x,y,z)  Math.max.apply(null,[x,y,z]);
	Math.min(x,y,z)
	Math.random()
	Math.PI
	Math.E
	Math.sqrt(3)
	Math.pow(2,1/3)
	Math.sin(0)
	Math.log(10)
	Math.log(100)/Math.LN10 10为底 100的对数
    Math.log(512)/Math.LN2 2为底 512的对数
	Math.exp(3) e的三次幂

0 除以 0 没有意义，是一个NaN，另外还有无穷大除以无穷大，给任意负数作开方运算或者运算符不是数字或无法转化为数字的操作数。

isFinite() 数字不是NaN Infinity -Infinity 都返回true

	var zero = 0;
	var negz = -0;
	zero === negz  => true
	1/zero === 1/negz => false

## 日期和时间

	var then = new Date(2016,0,10); // 月份从0开始
	var later = new Date(2016,0,10,17,10,30);
	var now = new Date();
    var elapsed = now - then;
    later.getFullYear(); => 2016
	later.getMonth(); => 0
	later.getDate(); => 10
	later.getDay(); => 0
	later.getHours(); => 17
	later.getUTCHours(); => 9

## 字符

	var s = 'hello, world';
	console.log(s.charAt(0));  // h
	console.log(s.charAt(s.length-1));  // d
	console.log(s.substring(1,4));   // ell
	console.log(s.slice(1,4)); // ell
	console.log(s.slice(-3));  //rld
	console.log(s.indexOf("l"));  // 2
	console.log(s.lastIndexOf("l")); // 10
	console.log(s.indexOf("l",3));  // 3
	console.log(s.split(","));  // ['hello','world']
	console.log(s.replace("h","H"));  // Hello, world
	console.log(s.toUpperCase());  // HELLO, WORLD

	s[0]
	s[s.length - 1]
	
## 模式匹配

	/^HTML/  匹配以HTML开头的字符串
	/[1-9][0-9]*/  匹配非零数字，后面是任意个数字
	/\bjavascript\b/i  // 匹配单词“javascript” 忽略大小写

	var text = 'testing: 1,2,3';
	var pattern = /\d+/g;
	pattern.test(text)  // true 匹配成功
	text.search(pattern) // 9,首次匹配成功的位置
	text.match(pattern) // ['1','2','3'] 所以匹配组成的数组
	text.replace(pattern,'#') // testing:#,#,#
	text.splite(/\D+/) // ['','1','2','3']

## 布尔值

任何JS值都可以转化为布尔值，下面这些会变转化成 false

	undefined
	null
	0
	-0
	NaN
	""

这几个是假值，其他都是真值

if(o !== null) 只有不是null 才会执行

if(o) 只有不是false或者任何假值，才会执行

## null & undefined

null表示一个特殊值，常来描述空值，对其进行typeof 返回 object，它是一个特殊的对象值，表示非对象。但是通常认为他是自由类型的唯一成员，可以表示数字，字符串和对象是无值的。

undefined:表示变量没有初始化，如果要查询属性或数组元素的值，返回undefined说明这个属性或元素不存在，如果函数没有返回任何值，返回undefined。引用没有提供实参的函数形参的值也是undefined。使用typeof undefined 返回 undefined，表示是唯一类型成员

undefined == null 被认为是true，要使用=== 来区分

可以认为undefined是系统级的、出乎意料或者类似错误的值的空缺，null是程序及的、正常的或者意料之中的值空缺

## 全局对象