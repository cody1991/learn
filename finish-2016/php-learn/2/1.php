<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php 
        $tireqty = $_POST['tireqty'];
        $oilqty = $_POST['oilqty'];
        $sparkqty = $_POST['sparkqty'];

        $address = $_POST['address'];

        $DOCUMENT_ROOT = $_SERVER['DOCUMENT_ROOT'];

        date_default_timezone_set("Asia/Shanghai");
            
        $date = date('h:i,jS F Y');
     ?>
    

    <?php 
        echo "<p>Order processed at " . $date . "</p>";

        $totalqty = 0;
        $totalqty = $tireqty + $oilqty + $sparkqty;

        echo "Items ordered :" . $totalqty . "<br/>";

        if($totalqty == 0){
            echo "You did not order anything on the previous page!<br/>";
        }else{
            if($tireqty > 0){
                echo $tireqty . " tires<br/>";
            }
            if($oilqty > 0){
                echo $oilqty . " oil<br/>";
            }
            if($sparkqty > 0){
                echo $sparkqty . " spark<br/>";
            }
        }

        $outputstring = $date . " \t" . $tireqty . " tires \t" . $oilqty . " oil \t" . $sparkqty . " spark \t" . $address . "\n";

        echo $DOCUMENT_ROOT;

        // r r+ w w+ x x+ a a+ b t
        @ $fp = fopen($DOCUMENT_ROOT . 'study/2/1.txt','ab');  // 追加

        flock($fp,LOCK_EX);  // 写操作锁定
        // 锁定文件

        if(!$fp){
            echo "<p><strong>Your order could not be processed at this time.Please try again later.</strong></p>"; 
            exit();
        }

        fwrite($fp,$outputstring,strlen($outputstring));
        flock($fp,LOCK_UN);  // 写操作释放
        fclose($fp);

        echo "<p>Order written.</p>";
     ?>
</body>
</html>
