<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
<?php
$searchtype = $_POST['searchtype'];
$searchterm = trim($_POST['searchterm']);

if (!$searchterm || !$searchtype) {
	echo "You have not entered search defailts.";
	exit;
}

if (!get_magic_quotes_gpc()) {
	$searchtype = addslashes($searchtype);
	$searchterm = addslashes($searchterm);
}
$user = "cody1991";
$pass = "cody1991";

$mysqli = new mysqli('localhost', $user, $pass, 'books');

if (mysqli_connect_error()) {
	printf("Connect failed: %s\n", mysqli_connect_error());
	exit();
}

printf("server information: %s <br/>", $mysqli->server_info);
printf("Host information: %s <br/>", $mysqli->host_info);
printf("character set name: %s <br/>", $mysqli->character_set_name());
printf("get client info: %s <br/>", $mysqli->get_client_info());

$query = 'select * from books where ' . $searchtype . ' like \'%' . $searchterm . '%\'';

$results = $mysqli->query($query);
$num_results = $results->num_rows;

// print_r($results);
echo "<p>Number of books found: " . $num_results . "</p>";

for ($i = 0; $i < $num_results; $i++) {
	$row = $results->fetch_array(MYSQLI_BOTH);
	echo "<p><strong>" . ($i + 1) . " .Title: ";
	echo htmlspecialchars(stripslashes($row['title']));
	echo "</strong><br/>Author: ";
	echo stripslashes($row['author']);
	echo "<br/>ISBN: ";
	echo stripslashes($row['isbn']);
	echo "<br/>Price: ";
	echo stripslashes($row['price']);
	echo "</p>";
}
$results->free();
$mysqli->close();
?>
</body>
</html>
