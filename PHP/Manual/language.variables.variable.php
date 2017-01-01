<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php 
		$a = 'hello';
		$$a = 'world';

		echo "$a ${$a}";
		echo '<br/>';

		class foo{
			var $bar = 'I am bar.';
			var $arr = array('I am A.','I am B.');
			var $r = 'I am r.';
		}

		$foo = new foo();
		$bar = 'bar';
		$baz = array('foo','bar','baz','quux');

		echo $foo->$bar . '<br/>';
		echo $foo->$baz[1] . '<br/>';

		$start = 'b';
		$end = 'ar';
		echo $foo->{$start.$end}.'<br/>';

		$arr = 'arr';
		echo $foo->$arr[1]."<br/>";
		echo $foo->{$arr}[1]."<br/>";
	?>
</body>
</html>