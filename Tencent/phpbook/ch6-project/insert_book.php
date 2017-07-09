<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
<?php
$isbn = $_POST['isbn'];
$author = $_POST['author'];
$title = $_POST['title'];
$price = $_POST['price'];

if (!$isbn || !$author || !$title || !$price) {
	echo "You have not entered search defailts.";
	exit;
}

if (!get_magic_quotes_gpc()) {
	$isbn = addslashes($isbn);
	$author = addslashes($author);
	$title = addslashes($title);
	$price = doubleval($price);
}

@$db = new mysqli('localhost', 'cody1991', 'cody1991', 'books');

if (mysqli_connect_error()) {
	printf("Connect failed: %s\n", mysqli_connect_error());
	exit();
}

// $query = sprintf("insert into books values ('%s','%s','%s',%f)", $isbn, $author, $title, $price);

// $result = $db->query($query);

// if ($result) {
// 	echo $db->affected_rows . " book inserted into database.";
// } else {
// 	echo "An error has occurred. The item was not added.";
// }

$query = "insert into books values(?,?,?,?)";
$stmt = $db->prepare($query);
$stmt->bind_param('sssd', $isbn, $author, $title, $price);
$result = $stmt->execute();
if ($result) {
	echo $stmt->affected_rows . " book inserted into database.";
} else {
	echo "An error has occurred. The item was not added.";
}
$db->close();
?>
</body>
</html>
