<?php
$searchtype = $_POST['searchtype'];
$searchterm = trim($_POST['searchterm']);

if (!$searchtype || !$searchterm) {
	echo 'You have not entered search details.Please go back and try again';
	exit;
}

if (!get_magic_quotes_gpc()) {
	$searchtype = addslashes($searchtype);
	$searchterm = addslashes($searchterm);
}

@$db = new mysqli('localhost', 'sally', 'sally', 'books');

if (mysqli_connect_errno()) {
	echo 'Error: Could not connet to database, Please try again later';
	exit;
}

$query = "select * from books where " . $searchtype . " like '%" . $searchterm . "%';";

// echo $query;

$result = $db->query($query);

// print_r($result);

$num_results = $result->num_rows;

echo "<p>Number of books found: " . $num_results . "</p>";

for ($i = 0; $i < $num_results; $i++) {
	$row = $result->fetch_assoc();

	echo "<p><strong>" . ($i + 1) . ". Title: ";
	echo htmlspecialchars(stripslashes($row['title']));
	echo "</strong><br/>Author: ";
	echo stripcslashes($row['author']);
	echo "<br/>ISBN: ";
	echo stripcslashes($row['isbn']);
	echo "<br/>Price: ";
	echo stripcslashes($row['price']);
	echo "</p>";
}

$result->free();
$db->close();

?>
