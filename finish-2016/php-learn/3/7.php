<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php 
        $DOCUMENT_ROOT = $_SERVER['DOCUMENT_ROOT'];

        $orders = file($DOCUMENT_ROOT.'study/3/1.txt');

        $number_of_orders = count($orders);

        if($number_of_orders == 0){
            echo "<p><strong>No order</strong></p>";
        }

        // for($i = 0 ; $i < $number_of_orders ; $i++){
        //     echo $orders[$i] . '<br/>';
        // }
        echo "<table width=\"100%\" border=\"1\">\n";
        echo "<tr>
            <th bgcolor=\"#ccccff\">Order Date</th>
            <th bgcolor=\"#ccccff\">Tires</th>
            <th bgcolor=\"#ccccff\">Oil</th>
            <th bgcolor=\"#ccccff\">Spark Plugs</th>
            <th bgcolor=\"#ccccff\">Address</th>
        </tr>";

        for($i = 0 ; $i < $number_of_orders; $i++){
            $line = explode("\t",$orders[$i]);
            // 分割每行

            // print_r($line);

            $line[1] = intval($line[1]);
            $line[2] = intval($line[2]);
            $line[3] = intval($line[3]);

            echo "<tr>
                
                <td>" . $line[0] . "</td>
                <td align=\"right\">" . $line[1] . "</td>
                <td align=\"right\">" . $line[2] . "</td>
                <td align=\"right\">" . $line[3] . "</td>
                <td align=\"right\">" . $line[4] . "</td>
            </tr>";
        }
     ?>
</body>
</html>
