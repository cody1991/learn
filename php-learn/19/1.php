<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
// $_FILES['userfile']['tmp_name']
// $_FILES['userfile']['name']
// $_FILES['userfile']['size']
// $_FILES['userfile']['type']
// $_FILES['userfile']['error']
if ($_FILES['userfile']['error'] > 0) {

    // 0 表示 ok
    // 1 上传文件超过最大值
    // 2 上传文件超过了 html 里面的 MAX_FILE_SIZE
    // 3 文件只上传了一部分
    // 4 没有上传任何文件
    // 6 没有指定零时文件
    // 7 写入磁盘失败

    echo 'Problem:';

    switch ($_FILES['userfile']['error']) {
        case 1:echo 'File exceeded upload_max_filesize';
            break;
        case 2:echo 'File exceeded max_file_size';
            break;
        case 3:echo 'File only partially uploaded';
            break;
        case 4:echo 'No file uploaded';
            break;
        case 6:echo 'Cannot upload file:No temp directory specified';
            break;
        case 7:echo 'Upload failed:cannot write to disk';
            break;
    }
}

if ($_FILES['userfile']['type'] != 'text/plain') {
    echo 'Problem: file is not plain text';
    exit;
}

$upfile = $_SERVER['DOCUMENT_ROOT'] . '/study/19/uploads/' . $_FILES['userfile']['name'];

if (is_uploaded_file($_FILES['userfile']['tmp_name'])) {

    echo $_FILES['userfile']['tmp_name'];

    if (!move_uploaded_file($_FILES['userfile']['tmp_name'], $upfile)) {
        echo 'Problem: Could not move file to destination directory';
        exit;
    }
} else {
    echo 'Problem:Possible file upload attack . Filename :';
    echo $_FILES['userfile']['name'];
}

echo '<br/><br/>File uploaded successfully<br/><br/>';

$contents = file_get_contents($upfile);
$contents = strip_tags($contents); //  过滤符号

file_put_contents($upfile, $contents);

echo '<p>Preview of uploaded file contents:<br/><hr/></p>';
echo nl2br($contents);

echo '<br/></hr/>';
?>
</body>
</html>
