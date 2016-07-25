<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
include 'file_exceptions.php';

$outputstring = 'test exceptions';

try {
    if (!($fp = @fopen("1.txt", 'ab'))) {
        throw new fileOpenException();
    }

    if (!flock($fp, LOCK_EX)) {
        throw new FileLockException();
    }

    if (!fwrite($fp, $outputstring, strlen($outputstring))) {
        throw new fileWriteException();
    }

    flock($fp, LOCK_UN);
    fclose($fp);
    echo "<p>Order written</p>";

} catch (fileOpenException $foe) {
    echo "<p><strong>Orders file count not be opened</strong></p>";
}
?>
</body>
</html>
