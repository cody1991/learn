<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
session_start();
$old_user = $_SESSION['valid_user'];
unset($_SESSION['valid_user']);
session_destroy();
?>


<?php
if (!empty($old_user)) {
    echo 'Logged out.' . $old_user;
} else {
    echo 'You were not logged in,and so have not been logged out';
}
?>
</body>
</html>
