<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
$isbn   = $_POST['isbn'];
$author = $_POST['author'];
$title  = $_POST['title'];
$price  = $_POST['price'];

if (!$isbn || !$author || !$title || !$price) {
    echo "You have not entered all the required details.<br/>";
    exit;
}

if (!get_magic_quotes_gpc()) {
    $isbn   = addslashes($isbn);
    $author = addslashes($author);
    $title  = addslashes($title);
    $price  = doubleval($price);
}

@$db = new mysqli('localhost', 'root', '', 'books');

if (mysqli_connect_errno()) {
    echo 'Error:Could not connect to database';
    exit;
}

// $query  = "insert into books values ('" . $isbn . "','" . $author . "','" . $title . "','" . $price . "')";
// 使用prepared

$query = 'insert into books values(?,?,?,?)';
$stmt  = $db->prepare($query);
$stmt->bind_param("sssd", $isbn, $author, $title, $price);
$stmt->execute();
// $result = $db->query($query);

// if ($result) {
echo $stmt->affected_rows . " book inserted into database.";
// } else {
// echo "An error has occured.";
// }
// 错误返回1

$stmt->close();

$db->close();

?>
</body>
</html>
