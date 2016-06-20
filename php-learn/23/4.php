<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
session_start();
if (isset($_POST['userid']) && isset($_POST['password'])) {
    $userid   = $_POST['userid'];
    $password = $_POST['password'];

    $db_conn = new mysqli('localhost', 'root', '', 'auth');

    if (mysqli_connect_errno()) {
        echo 'Connection to database failed: ' . mysqli_connect_error();
        exit();
    }

    $query = 'select * from authorized_users where name = \'' . $userid . '\' and password = \'' . sha1($password) . "'";

    echo $query;

    $result = $db_conn->query($query);

    if (!$result) {
        echo 'nosuchuserid';
        echo ' < formmethod = "post"action = "4.php" > ';
        echo ' < inputtype  = "text"name  = "userid" > ';
        echo ' < inputtype  = "text"name  = "password" > ';
        echo ' < inputtype  = "submit"value  = "submit" > ';
        exit();
    }
    if ($result->num_rows) {
        $_SESSION['valid_user'] = $userid;
    }

    $db_conn->close();
}
?>

<h1>
    Home page
</h1>
<?php
if (isset($_SESSION['valid_user'])) {
    echo 'You are logged in as : ' . $_SESSION['valid_user'] . "<br/>";
    echo '<a href = "6.php">Logout</a><br/>';
} else {
    if (isset($userid)) {
        echo 'Couldnotlogyouin .  < br/> ';
    } else {
        echo 'Youarenotloggedin .  < br/> ';
    }

    echo ' <form method="post" action = "4.php"> ';
    echo ' <input type="text" name  = "userid"> ';
    echo ' <input type="text" name  = "password"> ';
    echo ' <input type="submit" value  = "submit"> ';
}
?>
</body>
</html>
