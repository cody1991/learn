<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php 
        $prices = array('Tries' => 100, 'oil' => 10, 'Spark Plugs' => 4);

        foreach($prices as $key => $value){
            echo $key . " - " . $value . '<br/>';
        }

        echo "<hr/>";

        reset($prices);

        while ($element  = each($prices)) {
            echo $element;
            echo $element['key'] . ' - ' . $element['value'] . '<br/>';
        }

        echo "<hr/>";

        reset($prices);

        while(list($product,$price) = each($prices)){
            echo $product . ' - ' . $price . '<br/>';
        }

        // reset($prices) 回到起始位置

        // $a + $b ，  $b中的元素加到$a的末尾，但是如果有相同的索引，将不会添加
     ?>
</body>
</html>
