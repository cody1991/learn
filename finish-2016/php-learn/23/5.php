<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
session_start();

echo '<h1>Members only</h1>';

if (isset($_SESSION['valid_user'])) {
    echo '<p>You are logged in as ' . $_SESSION['valid_user'] . '</p>';
    echo '<p>Members only content goes here</p>';
} else {
    echo '<p>You are not logged in.</p>';
    echo '<p>Only logged in members may see this page</p>';
}

echo '<a href="4.php">Back to main page</a>';
?>
</body>
</html>
