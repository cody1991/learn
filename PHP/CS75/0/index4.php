<?php 
	error_reporting(E_ALL);
	ini_set('display_errors',TRUE)
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
	<?php echo '<pre>';print_r($_POST);echo '</pre>'; ?>
	
	<p>
		Thanks for registering, <?= $_POST['name'] ?>
		<br>
		<b>Gender:</b> <?= $_POST['gender']	?>
		<br>
		<?php if(isset($_POST['captain'])): ?>
			<b>Captain: </b> Yes
		<?php endif ?>
	</p>
</body>
</html>