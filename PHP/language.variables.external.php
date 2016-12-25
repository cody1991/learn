<?php 
		setcookie('MyCookie[foo]','Testing 1',time()+3600);
		setcookie('MyCookie[bar]','Testing 1',time()+3600);
?>
<?php 
	if(isset($_COOKIE['count'])){
		$count = $_COOKIE['count'] + 1;
	}else{
		$count = 1;
	}

	setcookie('count',$count,time()+3600);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
	<form action="./language.variables.external-action.php" method="POST">
		Name:  <input type="text" name="username"><br />
    Email: <input type="text" name="email"><br />
    <input type="submit" name="submit" value="Submit me!" />
	</form>
</body>
</html>