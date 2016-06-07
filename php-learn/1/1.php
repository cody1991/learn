<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
        echo '<p>Order processed.</p>';
        echo date('H:i,jS F Y');
        // H是小时 i是分钟  J是日期 S是顺序后缀 F是月份全称

        $tireqty = $_POST['tireqty'];

        echo '<br/>';
        echo $tireqty. ' trieqty<br/>';
    ?>
</body>
</html>
