<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>

</head>
<body>
<?php
if (isset($_COOKIE['count'])) {
	$count = $_COOKIE['count'] + 1;
} else {
	$count = 1;
}

setcookie('count', $count, time() + 3600);
setcookie('Cart[$count]', $count, time() + 3600);

echo $count;

?>

<hr>
<?php
function my_callback_function() {
	echo 'hello world';
}
class MyClass {
	static function myCallbackMethod() {
		echo 'hello world!';
	}
}

call_user_func('my_callback_function');
call_user_func(array('MyClass', 'myCallbackMethod'));
$obj = new MyClass();
call_user_func(array($obj, 'myCallbackMethod'));
call_user_func('MyClass::myCallbackMethod');

class A {
	public static function who() {
		echo 'A\n';
	}
}

class B extends A {
	public static function who() {
		echo 'B\n';
	}
}

call_user_func(array('B', 'parent::who'));

$double = function ($a) {
	return $a * 2;
};
$numbers = range(1, 5);
$new_numbers = array_map($double, $numbers);
print implode(' ', $new_numbers);
?>
<hr>
<?php
class foo2 {
	function do_foo() {
		echo 'Doing foo.';
	}
}
$bar = new foo2();
$bar->do_foo();

?>
<hr>

<?php
$handle = opendir('.');
while (false !== ($file = readdir($handle))) {
	$files[] = $file;
}

closedir($handle);

print_r($files);

sort($files);
print_r($files);

?>
<hr>
<p>unset() 会删除数组中的某个健，但是不会重建索引，array_values 可以重制数组的索引</p>
<?php
$array = [1, 2, 3, 4, 5];
print_r($array);

foreach ($array as $i => $value) {
	unset($array[$i]);
}
print_r($array);

$array[] = 6;
print_r($array);

$array = array_values($array);
$array[] = 7;
print_r($array);
?>
<p>
  unset() 可以删除一个数组项，也可以删除整改书詛
</p>
<?php
class foo {
	var $foo;
	var $bar;

	function foo() {
		$this->foo = 'Foo';
		$this->bar = array('Bar1', 'Bar2', 'Bar3');
	}
}

$foo = new foo();
$name = 'MyName';

echo <<<EOT
My name is "$name", I am printing some $foo->foo.
Now,I am printing some {$foo->bar[1]}.
This should print a capital 'A': \x41
EOT;
?>
<p>
  单引号里面的字符串，只有 \'  \\ 才会转义
</p>
<p>
  round() 四舍五入 floor() 向下 abs() 绝对值 is_nan()
</p>
<p>
  gettype is_int is_string
</p>
<hr>
<p>
  htmlspecialchars() 特殊的字符正确编码，不会被注入 html 和 js 代码
  (int) 专程一个整形值
</p>
<?php
echo htmlspecialchars($_POST['name']);
echo (int) $_POST['age']; ?>
<hr>
<p>
  还有其他的，比如 strtoupper() strlen() 等等
</p>
<?php
if (strpos($_SERVER['HTTP_USER_AGENT'], 'Chrome') !== false):
?>
<p>
  使用 chrome

</p>
<?php else: ?>
<p>
  没有使用 chrome
</p>
<?php endif;?>
 <hr>
<p>要达到这个目的，需要检查用户的 agent 字符串，它是浏览器发送的 HTTP 请求的一部分。该信息被存储在一个变量中。在 PHP 中，变量总是以一个美元符开头。我们现在感兴趣的变量是 $_SERVER['HTTP_USER_AGENT']</p>
<?php
echo $_SERVER['HTTP_USER_AGENT'] ?>
<hr>
<?php
phpinfo();
?>
</body>
</html>
