<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
// session_get_cookie_params();
// 返回 lifetime path domain secure
// session_set_cookie_params();

session_start();

$_SESSION['username'] = 'cody1991';

// if(isset($_SESSION['username'])) ...
// unset($_SESSION['username']) 不推荐
// 销毁全部 $_SESSION = array();
// session_destroy();

echo 'The content of $_SESSION["username"] is ' . $_SESSION["username"];

?>

<a href="2.php">next page</a>
</body>
</html>
