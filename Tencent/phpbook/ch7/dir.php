<?php
$current_dir = './uploads/';
$dir = opendir($current_dir);

echo "<p>Upload directory is $current_dir</p>";
echo "<p>Directory Listing:</p><ul>";

while (false !== ($file = readdir($dir))) {
	if ($file != '.' && $file != '..') {
		echo "<li>$file</li>";
	}
}

echo "</ul>";
closedir($dir);

$dir = dir("./uploads/");
echo "<p>Handle is $dir->handle</p>";
echo "<p>Upload directory is $dir->path</p>";
echo "<p>Directory Listing:</p></ul>";

while (false !== ($file = $dir->read())) {
	if ($file != "." && $file != '..') {
		echo "<li>$file</li>";
	}
}

echo "</ul>";
$dir->close();

// 332页
?>
