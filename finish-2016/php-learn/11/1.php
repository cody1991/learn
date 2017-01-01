<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
$searchtype = $_POST['searchtype'];
$searchterm = $_POST['searchterm'];

if (!$searchtype || !$searchterm) {
    echo 'You have not entered search details';
    exit;
}

if (!get_magic_quotes_gpc()) {
    $searchtype = addslashes($searchtype);
    $searchterm = trim(addslashes($searchterm));
}

@$db = new mysqli('localhost', 'root', '', 'books');

// $db->select_db(dbname);

if (mysqli_connect_errno()) {
    echo "Error:could not connect to database";
    exit;
}

$query       = "select * from books where " . $searchtype . " like '%" . $searchterm . "%'";
$result      = $db->query($query);
$num_results = $result->num_rows;

echo "<p>Number of books found : " . $num_results . "</p>";

for ($i = 0; $i < $num_results; $i++) {
    $row = $result->fetch_assoc();
    echo "<p><strong>" . ($i + 1) . ".</strong><br/>Title : ";
    echo htmlspecialchars(stripslashes($row['title']));
    echo "<br/>Author:";
    echo stripcslashes($row['author']);
    echo "<br/>ISBN: ";
    echo stripcslashes($row['isbn']);
    echo "<br/>Price: ";
    echo stripslashes($row['price']);
    echo "</p>";
}

$result->free();
$db->close();
?>
</body>
</html>
