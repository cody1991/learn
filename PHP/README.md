目录

	cd /Library/WebServer/Documents/

---

	strpos()

	strtoupper() 

	strlen()

---

	gettype()

	is_int()

	is_string()

	var_dump()

	gettype()

	if( $express = true ):
	else:
	endif;

---
	
	(bool) 
	
	FALSE

	布尔值 FALSE 本身
	整型值 0（零）
	浮点型值 0.0（零）
	空字符串，以及字符串 "0"
	不包括任何元素的数组
	不包括任何成员变量的对象（仅 PHP 4.0 适用）
	特殊类型 NULL（包括尚未赋值的变量）
	从空标记生成的 SimpleXML 对象

---

要使用八进制表达，数字前必须加上 0（零）。要使用十六进制表达，数字前必须加上 0x。要使用二进制表达，数字前必须加上 0b。

---

	decimal     : [1-9][0-9]*
	            | 0

	hexadecimal : 0[xX][0-9a-fA-F]+

	octal       : 0[0-7]+

	binary      : 0b[01]+

	integer     : [+-]?decimal
	            | [+-]?hexadecimal
	            | [+-]?octal
	            | [+-]?binary

---

如果向八进制数传递了一个非法数字（即 8 或 9），则后面其余数字会被忽略。

	<?php
	var_dump(01090); // 八进制 010 = 十进制 8
	?>

如果给定的一个数超出了 integer 的范围，将会被解释为 float。同样如果执行的运算结果超出了 integer 范围，也会返回 float

---

一个布尔值 boolean 的 TRUE 被转换成 string 的 "1"。Boolean 的 FALSE 被转换成 ""（空字符串）。这种转换可以在 boolean 和 string 之间相互进行

直接把 array，object 或 resource 转换成 string 不会得到除了其类型之外的任何有用信息。可以使用函数 print_r() 和 var_dump() 列出这些类型的内容。

大部分的 PHP 值可以转变成 string 来永久保存，这被称作串行化，可以用函数 serialize() 来实现

---

	<?php
	$foo = 1 + "10.5";                // $foo is float (11.5)
	$foo = 1 + "-1.3e3";              // $foo is float (-1299)
	$foo = 1 + "bob-1.3e3";           // $foo is integer (1)
	$foo = 1 + "bob3";                // $foo is integer (1)
	$foo = 1 + "10 Small Pigs";       // $foo is integer (11)
	$foo = 4 + "10.2 Little Piggies"; // $foo is float (14.2)
	$foo = "10.0 pigs " + 1;          // $foo is float (11)
	$foo = "10.0 pigs " + 1.0;        // $foo is float (11)     
	?>