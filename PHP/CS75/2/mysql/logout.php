<?php 
	session_start();

	$_SESSION['authenticated'] = FALSE;
	$host = $_SERVER['HTTP_HOST'];
	$path = rtrim(dirname($_SERVER['PHP_SELF']),'/\\');
	header("Location:http://$host$path/index.php");
	exit;
?>