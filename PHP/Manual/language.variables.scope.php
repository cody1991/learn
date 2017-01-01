<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php  
		$a = 1;
		$b = 2;
		function Sum(){
			// global $a,$b;
			// $b = $a + $b;
			// =====>

			$GLOBALS['b'] = $GLOBALS['a'] + $GLOBALS['b'];
		}

		Sum();
		echo $b;

		function Test(){
			static $a = 0;
			echo $a;
			$a++;
		}

		Test();
		Test();

		function Test2(){
			static $count = 0;

			$count++;

			echo $count . '<br/>';
			if($count < 10){
				Test2();
			}

			$count--;
		}
		echo '<br/>';
		Test2();

		function test_global_ref(){
			global $obj;
			$obj = &new stdclass;
		}
		function test_global_noref(){
			global $obj;
			$obj = new stdclass;
		}

		test_global_ref();
		var_dump($obj);
		test_global_noref();
		var_dump($obj);
	?>
</body>
</html>