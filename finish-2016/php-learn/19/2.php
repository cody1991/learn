<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
$current_dir = './uploads/';
$dir         = opendir($current_dir);

echo "<p>Upload directory is $current_dir</p>";
echo "<p>Directory Listing:</p>";

echo "<ul>";

// readdir($dir) 从目录中读取文件
// 读取文件名为 "0" 的时候也返回 false 使用全等避免
while (false !== ($file = readdir($dir))) {
    // 过滤掉 two entries of . and ..
    if ($file != "." && $file != '..') {
        echo "<li>$file</li>";
    }
}

echo "</ul>";

closedir($dir);

echo "<hr/>";

$dir2 = dir('./uploads/');
echo "<p>Handle is $dir2->handle</p>";
echo "<p>Upload directory is $dir2->path</p>";
echo "<p>Directory Listing:</p>";

echo "<ul>";

while (false !== ($file = $dir2->read())) {
    if ($file != "." && $file != "..") {
        echo "<li>$file</li>";
    }
}

echo "</ul>";

$dir2->close();

?>
</body>
</html>
