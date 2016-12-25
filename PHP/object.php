<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php 
		class foo{
			function do_foo(){
				echo 'Doing foo.';
			}
		}
		$bar = new foo();
		$bar->do_foo();
	 ?>
</body>
</html>