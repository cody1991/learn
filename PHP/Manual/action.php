<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<p>
		您好，<?php echo htmlspecialchars($_POST['name']) ?>
	</p>
	<p>
		<?php echo (int)$_POST['age'] ?> 岁了
	</p>
</body>
</html>