<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
        date_default_timezone_set("Asia/Shanghai");
        echo '<p>Order processed.</p>';
        echo date('h:i,jS F Y');
        // H是小时 i是分钟  J是日期 S是顺序后缀 F是月份全称

        $totalqty = 0;
        $tireqty = $_POST['tireqty'];
        $oilqty = $_POST['oilqty'];
        $sparkqty = $_POST['sparkqty'];
        $find = $_POST['find'];

        $totalqty = $tireqty + $oilqty + $sparkqty;
        define('TIREPRICE',100);
        define('OILPRICE',10);
        define('SPARKPRICE',4);

        echo '<br/>' . $find . '<br/>';

        if($find == 'a'){
            echo "<p>I'm a regular customer</p>";
        }elseif($find == 'b'){
            echo "<p>TV advertising</p>";
        }elseif($find == 'c'){
            echo "<p>Phone direcroty</p>";
        }elseif($find=='d'){
            echo "<p>Word of mouth</p>";       
        }

        echo '<br/>';
        // 变量存在
        echo 'isset($tireqty)' . isset($tireqty) . '<br/>';
        echo 'isset($oilqty)' . isset($oilqty) . '<br/>';
        // 不存在 非空 非0
        // 0 没定义 会返回 1
        echo 'empty($sparkqty)' . empty($sparkqty) . '<br/>';
        echo 'empty($nothere)' . empty($nothere) . '<br/>';



        $totalamout = $tireqty * TIREPRICE + $oilqty * OILPRICE + $sparkqty * SPARKPRICE;


        echo "Subtotal: $" . number_format($totalamout,2) . "<br/>";

        $taxrate = 0.10;
        $totalamout = $totalamout * (1 + $taxrate);
        echo 'Total inclue tax :$ ' . number_format($totalamout,2) . "<br/>";

        echo '<br/>';

        echo $tireqty. ' trieqty<br/>' . $oilqty . ' oilqty<br/>' . $sparkqty . ' sparkqty<br/>';
        echo "$tireqty trieqty<br/>";  // 双引号会替换
        echo '$tireqty trieqty<br/>';  // 单引号不会替换变量

        echo '<br/>';
        $total = 100;
        echo $total;

        echo '<br/>';

        $FloatTotal = (float)$total;
        echo $FloatTotal;

        echo '<br/>';

        $varname = 'tireqty2';
        $$varname = 5;

        echo $tireqty2;

        // define('OILPRICE',10);
        define('PI',1.14231);
        // 定义常量

        echo '<br/>';

        echo PI;

        phpinfo();
    ?>
</body>
</html>
