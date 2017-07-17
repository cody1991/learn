<?php
session_start();

$_SESSION['sess_var'] = "Hello World";

echo 'The contnet of $_SESSION[\'sess_var\'] is ' . $_SESSION['sess_var'] . "<br/>";

unset($_SESSION['sess_var']);

echo '销毁';
?>
  <a href="page3.php">Next page</a>
