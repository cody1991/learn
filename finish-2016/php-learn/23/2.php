<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
session_start();
echo 'The content of $_SESSION["username"] is ' . $_SESSION["username"];

unset($_SESSION['username']);
?>
<a href="3.php">next page</a>

</body>
</html>
