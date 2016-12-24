<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>PHP</title>
</head>
<body>
	<?php 
		$str = 'This is a test';
		$first = $str[0];
		$third = $str[2];
		echo $first.'<br/>'.$third.'<br/>';

		$str = 'This is still a test.';
		$last = $str[strlen($str)-1];
		echo $last.'<br/>';

		$str = 'Look at the sea';
		$str[strlen($str)-1] = 'e';
		echo $str.'<br/>';
	 ?>
	<?php  
		$juices = array('apple','orange','koo'=>'purple');

		error_reporting(E_ALL);

		$great = 'fantastic';

		function greatFun(){
			return 'great';
		}

		echo "This is { $great}".'<br/>';
		echo "This is {$great}".'<br/>';
		echo "This is ${great}".'<br/>';
		echo "${greatFun()}".'<br/>';

		class beers{
			const softdrink = 'rootbeer';
			public static $ale = 'ipa';
		}

		$rootbeer = 'A & W';
		$ipa = 'Ale';

		echo "I'd like an ${beers::softdrink}" . '<br/>';
		// Fatal error: Access to undeclared static property: beers::$softdrink in /Library/WebServer/Documents/PHP/index.php on line 33
		// echo "I'd like an {${beers::$softdrink}}" . '<br/>';
		echo "I'd like an ${beers::$ale}".'<br/>';
		// Fatal error: Undefined class constant 'ale' in /Library/WebServer/Documents/PHP/index.php on line 36
		// echo "I'd like an {${beers::ale}}".'<br/>';
	?>
	<?php  
		echo "He drank some $juices[0]".'<br/>';
		echo "He drank some $juices[koo]".'<br/>';
		echo "He drank some {$juices['koo']}".'<br/>';

		class people{
			public $john = 'John';
			public $jane = 'Jane';
		}

		$people = new people();
		echo "$people->john drank some $juices[0]".'<br/>';
	?>
	<?php  
		$str = <<<EOD
Example of string
spanning multiple lines
using heredoc syntax.
EOD;
		class foo{
			var $foo;
			var $bar;
			function foo(){
				$this->foo = 'Foo';
				$this->bar = array('Bar1','Bar2');
			}
		}
		$foo = new foo();
		$name = 'MyName';

		echo <<<EOT
My name is "$name". I am printing some $foo->foo
Now, I am printing some {$foo->bar[1]}.
This should print a capital 'A':\x41
EOT;
		echo '<br/>';
		echo <<<'EOT'
My name is "$name". I am printing some $foo->foo
Now, I am printing some {$foo->bar[1]}.
This should print a capital 'A':\x41
EOT;
	?>
	<?php  
		$a = 1.23456789;
		$b = 1.23456780;
		$epsilon = 0.00001;
		if(abs($a-$b)<$epsilon){
			echo "true";
		}
		echo "<br/>";
		echo is_nan(NAN);
		echo "<br/>";
	?>
	<?php  
		$a = 0x1A;
		echo $a;
		echo '<br/>';
		$a = 0123;
		echo $a;
		echo '<br/>';
		echo var_dump(01090);
		echo '<br/>';
		echo PHP_INT_MAX;
		$larger_number = 9223372036854775807;
		echo '<br/>';
		var_dump($larger_number);

		$larger_number = $larger_number+1;
		echo '<br/>';
		var_dump($larger_number);
		echo '<br/>';
		var_dump(25/7);
		echo '<br/>';
		var_dump((int)(25/7));
		echo '<br/>';
		var_dump(round(25/7));
		echo '<br/>';
		echo 0.1+0.7;
		echo '<br/>';

	?>
	<hr>
	<?php  
		var_dump((bool) "");
		var_dump((bool) "0");
		var_dump((bool) -2);
		var_dump((bool) "foo");
		var_dump((bool) 2.3e5);
		var_dump((bool) array(12));
		var_dump((bool) array());
		var_dump((bool) "false");
		var_dump((bool) FALSE);
	?>
	<hr>
	<?php 
		$a_bool = TRUE;
		$a_str = "foo";
		$a_str2 = 'foo';
		$an_int = 12;
		echo '<br/>';
		echo gettype($a_bool);
		echo '<br/>';
		echo gettype($a_str);
		echo '<br/>';
		echo var_dump($a_str2);
		echo '<br/>';
		if(is_int($an_int)){
			$an_int+=4;
		}
		echo var_dump($an_int);
		echo '<br/>';

		if(!is_string($a_bool)){
			echo "String:$a_bool";
		}
	 ?>
	<hr>
	<?php $expression = true ?>
	<?php if($expression == true): ?>
		<p>This will show if the expression is true</p>
	<?php else: ?>
		<p>Otherwise this will show</p>
	<?php endif ?>
	<hr>
	<form action="action.php" method="post">
		<p><input type="text" name="name" placeholder="name"></p>
		<p><input type="text" name="age" placeholder="age"></p>
		<input type="submit" value="submit">
	</form>
	<?
		// echo phpinfo()
		echo '<p>'.$_SERVER['HTTP_USER_AGENT'].'</p>';

		if(strpos($_SERVER['HTTP_USER_AGENT'],'MSIE') === FALSE || strpos($_SERVER['HTTP_USER_AGENT'],'Trident')===FALSE){
	?>
	  <p>没有使用万恶的Internet Explorer</p>
	<?} else {	
	?>
		<p>草你大爷的用什么IE啊？</p>
	<?
	}
	?>	
</body>
</html>