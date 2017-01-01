<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php 
	  define('FOO', "something");
		define("FOO2", "something else");

		echo FOO;

		const FOO3 = 'Hello world';

		echo FOO3;


		echo __LINE__ . '<br/>';
		echo dirname(__FILE__) . '<br/>';
		echo __FILE__ . '<br/>';
		echo __DIR__ . '<br/>';
		echo __FUNCTION__ . '<br/>';
		echo __CLASS__ . '<br/>';
		echo __TRAIT__ . '<br/>';
		echo __METHOD__ . '<br/>';
		echo __NAMESPACE__ . '<br/>';
  ?>
</body>
</html>
