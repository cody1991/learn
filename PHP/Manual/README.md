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

---

unset() 函数允许删除数组中的某个键。但要注意数组将不会重建索引。如果需要删除后重建索引，可以用 array_values() 函数。

	<?php
	$a = array(1 => 'one', 2 => 'two', 3 => 'three');
	unset($a[2]);
	/* will produce an array that would have been defined as
	   $a = array(1 => 'one', 3 => 'three');
	   and NOT
	   $a = array(1 => 'one', 2 =>'three');
	*/

	$b = array_values($a);
	// Now $b is array(0 => 'one', 1 =>'three')
	?>

---

一些函数如 call_user_func() 或 usort() 可以接受用户自定义的回调函数作为参数。回调函数不止可以是简单函数，还可以是对象的方法，包括静态类方法。

除了普通的用户自定义函数外，create_function() 可以用来创建一个匿名回调函数。自 PHP 5.3.0 起也可传递 closure 给回调参数。

---

将字符串文字和变量转换为二进制字符串：

	<?php
	$binary = (binary)$string;
	$binary = b"binary string";
	?>

---

只有有名字的变量才可以引用赋值

---

PHP 指令 register_globals 的默认值为 off。这是 PHP 的一个主要变化。让 register_globals 的值为 off 将影响到预定义变量集在全局范围内的有效性。例如，为了得到 DOCUMENT_ROOT 的值，将必须使用 $_SERVER['DOCUMENT_ROOT'] 代替 $DOCUMENT_ROOT，又如，使用 $_GET['id'] 来代替 $id 从 URL http://www.example.com/test.php?id=3 中获取 id 值，亦或使用 $_ENV['HOME'] 来代替 $HOME 获取环境变量 HOME 的值。

---

你可能注意到 PHP 的全局变量和 C 语言有一点点不同，在 C 语言中，全局变量在函数中自动生效，除非被局部变量覆盖。这可能引起一些问题，有些人可能不小心就改变了一个全局变量。PHP 中全局变量在函数中使用时必须声明为 global。

---

变量范围的另一个重要特性是静态变量（static variable）。静态变量仅在局部函数域中存在，但当程序执行离开此作用域时，其值并不丢失。看看下面的例子：

---

变量名中的点和空格被转换成下划线。例如 <input name="a.b" /> 变成了 $_REQUEST["a_b"]。

---

当提交表单时，可以用一幅图像代替标准的提交按钮，用类似这样的标记：

	<input type="image" src="image.gif" name="sub" />

当用户点击到图像中的某处时，相应的表单会被传送到服务器，并加上两个变量 sub_x 和 sub_y。它们包含了用户点击图像的坐标。有经验的用户可能会注意到被浏览器发送的实际变量名包含的是一个点而不是下划线（即 sub.x 和 sub.y），但 PHP 自动将点转换成了下划线。

---

Cookies 是一种在远端浏览器端存储数据并能追踪或识别再次访问的用户的机制。可以用 setcookie() 函数设定 cookies。Cookies 是 HTTP 信息头中的一部分，因此 SetCookie 函数必须在向浏览器发送任何输出之前调用。对于 header() 函数也有同样的限制。Cookie 数据会在相应的 cookie 数据数组中可用，例如 $_COOKIE，$HTTP_COOKIE_VARS 和 $_REQUEST。更多细节和例子见 setcookie() 手册页面。

---

常量和变量有如下不同：

	常量前面没有美元符号（$）；
	常量只能用 define() 函数定义，而不能通过赋值语句；
	常量可以不用理会变量的作用域而在任何地方定义和访问；
	常量一旦定义就不能被重新定义或者取消定义；
	常量的值只能是标量。

和使用 define() 来定义常量相反的是，使用 const 关键字定义常量必须处于最顶端的作用区域，因为用此方法是在编译时定义的。这就意味着不能在函数内，循环内以及 if 语句之内用 const 来定义常量。

---

几个 PHP 的“魔术常量”

	名称	说明
	__LINE__	文件中的当前行号。
	__FILE__	文件的完整路径和文件名。如果用在被包含文件中，则返回被包含的文件名。自 PHP 4.0.2 起，__FILE__ 总是包含一个绝对路径（如果是符号连接，则是解析后的绝对路径），而在此之前的版本有时会包含一个相对路径。
	__DIR__	文件所在的目录。如果用在被包括文件中，则返回被包括的文件所在的目录。它等价于 dirname(__FILE__)。除非是根目录，否则目录中名不包括末尾的斜杠。（PHP 5.3.0中新增） =
	__FUNCTION__	函数名称（PHP 4.3.0 新加）。自 PHP 5 起本常量返回该函数被定义时的名字（区分大小写）。在 PHP 4 中该值总是小写字母的。
	__CLASS__	类的名称（PHP 4.3.0 新加）。自 PHP 5 起本常量返回该类被定义时的名字（区分大小写）。在 PHP 4 中该值总是小写字母的。类名包括其被声明的作用区域（例如 Foo\Bar）。注意自 PHP 5.4 起 __CLASS__ 对 trait 也起作用。当用在 trait 方法中时，__CLASS__ 是调用 trait 方法的类的名字。
	__TRAIT__	Trait 的名字（PHP 5.4.0 新加）。自 PHP 5.4 起此常量返回 trait 被定义时的名字（区分大小写）。Trait 名包括其被声明的作用区域（例如 Foo\Bar）。
	__METHOD__	类的方法名（PHP 5.0.0 新加）。返回该方法被定义时的名字（区分大小写）。
	__NAMESPACE__	当前命名空间的名称（区分大小写）。此常量是在编译时定义的（PHP 5.3.0 新增）。