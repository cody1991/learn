<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
@$name     = $_POST['name'];
@$password = $_POST['password'];

if (!isset($name) || !isset($password)) {

    ?>


<h1>Please Log In</h1>
<p>This page is secret.</p>
<form action="1.php" method="post">
    <input type="text" name="name" placeholder="name">
    <br/>
    <input type="password" name="password" placeholder="password">
    <br/>
    <input type="submit" value="value">
</form>

<?php
// } else if (($name == "user") && ($password == "pass")) {
    //     echo "<h1>Here it is!</h1><p>I bet you are glad you can see this secret page.</p>";
    // } else {
    //     echo "<h1>Go away!</h1><p>You are not authorized to use this resource</p>";
    // }
} else {
    $mysql = new mysqli('localhost', 'root', '', 'auth');

    if (mysqli_connect_errno()) {
        echo "Error:could not connect to database";
        exit;
    }

    $query = "select count(*) from authorized_users where name = '" . $name . "' and password = sha1('" . $password . "')";

    $result = $mysql->query($query);

    if (!$result) {
        echo 'Cannot run query';
        exit;
    }

    $row   = $result->fetch_row();
    $count = $row[0];

    if ($count > 0) {
        echo '<h1>Here it is!</h1><p>I bet you are glad you can see this secret page.';

        print_r($row);
    } else {
        echo '<h1>Go away</h1>';
    }
}
?>

</body>
</html>
