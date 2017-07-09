<?php
// $_FILES['userfile']['tmp_name']
// $_FILES['userfile']['name']
// $_FILES['userfile']['size']
// $_FILES['userfile']['type']
// $_FILES['userfile']['error']

if ($_FILES['userfile']['error'] > 0) {
	echo 'Problem:';
	switch ($_FILES['userfile']['error']) {
	case 1:
		echo 'File exceeded upload_max_filesize';
		break;
	case 2:
		echo 'File exceeded max_file_size';
		break;
	case 3:
		echo 'File only partially uploaded';
		break;
	case 4:
		echo 'No file uploaded';
		break;
	case 6:
		echo 'Cannot upload file: No temp directory specified';
		break;
	case 7:
		echo 'Upload failed: Cannot write to disk';
		break;
	default:
		# code...
		break;
	}
	exit;
}

if ($_FILES['userfile']['type'] != 'text/plain') {
	echo 'Problem: file is not plain text';
	exit;
}

$upfile = './uploads/' . $_FILES['userfile']['name'];

if (is_uploaded_file($_FILES['userfile']['tmp_name'])) {
	if (!move_uploaded_file($_FILES['userfile']['tmp_name'], $upfile)) {
		echo 'Problem: could not move file to destination directory';
		exit;
	}
} else {
	echo 'Problem: Possible file upload attack. Filename: ';
	echo $_FILES['userfile']['name'];
	exit;
}

echo 'File uploaded successfully<br/><br/>';

$contents = file_get_contents($upfile);

// 消除所有的 html 和 php 标记
$contents = strip_tags($contents);

// 保存这个文件

echo $_FILES['userfile']['name'];

file_put_contents($_FILES['userfile']['name'], $contents);

echo '<p>Preview of uploaded file contents:<br/><hr/></p>';
echo nl2br($contents);
echo '<br/><hr/>';
?>
