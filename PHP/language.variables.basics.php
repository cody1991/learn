<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php 
		var_dump($unset_var);

		echo ($unset_bool ? "true\n" : "false\n");

		$unset_str .= 'abc';
		var_dump($unset_str);

		$unset_int += 25;
		var_dump($unset_int);

		$unset_float += 1.25;
		var_dump($unset_float);

		$unset_arr[3] = "def";
		var_dump($unset_arr);

		$unset_obj->foo = 'bar';
		var_dump($unset_obj);
	?>
</body>
</html>