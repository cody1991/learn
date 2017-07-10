<?php
echo "HTTP_REFERER:";
print_r(getenv('HTTP_REFERER'));

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

$dir = "./uploads/";
$files1 = scandir($dir);
$files2 = scandir($dir, 1);
echo "<p>Upload directory is $dir , ascending: </p><ul>";

foreach ($files1 as $file) {
	if ($file != "." && $file != '..') {
		echo "<li>$file</li>";
	}
}

echo "</ul>descending: <ul>";
foreach ($files2 as $file) {
	if ($file != "." && $file != '..') {
		echo "<li><pre>";
		echo $file;
		echo "</pre></li>";
		$file = $dir . $file;
		echo date('j F Y H:i', fileatime($file));
		echo date('j F Y H:i', filemtime($file));
		// $user = posix_getpwuid(fileowner($file));

		// echo $user['name'];

		echo decoct(fileperms($file));

		echo filetype($file);
		echo filesize($file);

		print_r(stat($file));
	}
}
echo "</ul>";

// 332页
 ?>
