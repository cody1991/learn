<?php 
	session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<h1>Home</h1>
	<?php if( isset($_SESSION['authenticated']) && $_SESSION['authenticated'] ): ?>
		You are logged in!
		<br>
		<a href="logout.php">log out</a>
	<?php else: ?>
		You are not logged in!
	<?php endif ?>
	<ul>
		<li>
			<a href="sign.php">index1.php</a>
		</li>
		<li>
			<a href="sign2.php">index2.php</a>
		</li>
	</ul>
</body>
</html>