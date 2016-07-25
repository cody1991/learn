<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
$dir    = './uploads/';
$files1 = scandir($dir);
$files2 = scandir($dir, 1);

echo "<p>Upload directory is $dir</p>";
echo "<p>Directory Listing in alphabetical order,ascending:</p>";

echo "<ul>";

foreach ($files1 as $file) {
    if ($file != '.' && $file != '..') {
        echo "<li>$file</li>";
    }
}

echo "</ul>";

echo "<p>Upload directory is $dir</p>";
echo "<p>Directory Listing in alphabetical order,descending:</p>";

echo "<ul>";

foreach ($files2 as $file) {
    if ($file != '.' && $file != '..') {
        echo "<li>$file</li>";
    }
}

echo "</ul>";

echo "<hr/>";

echo dirname($dir) . ' ' . basename($dir) . ' ';

mkdir('./mkdir/', 0777);

// print_r(getenv(varname))
?>
</body>
</html>
