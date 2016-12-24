<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>PHP</title>
</head>
<body>
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