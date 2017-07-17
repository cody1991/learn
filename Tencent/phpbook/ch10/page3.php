<?php
session_start();

echo 'The contnet of $_SESSION[\'sess_var\'] is ' . $_SESSION['sess_var'] . "<br/>";

session_destroy();
?>
  <a href="page3.php">Next page</a>
