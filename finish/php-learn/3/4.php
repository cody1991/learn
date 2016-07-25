<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php 
        $products = array('Tires','Oil','Spark Plugs');

        sort($products);

        print_r($products);

        echo '<br/>';

        $prices = array(100,10,4);
        sort($prices);
        print_r($prices);

        // sort() 第二个参数传递 SORT_REGULAR 默认值 SORT_NUMERIC 或者 SORT_STRING
        // 如果有数字2和字符串12 数字方面 2要小于12 字符串方面 '12' 小于2

        $test = array(2,'12');
        echo '<br/>';
        print_r($test);

        sort($test);
        echo '<br/>';
        print_r($test);

        sort($test,SORT_NUMERIC);
        echo '<br/>';
        print_r($test);   

        sort($test,SORT_STRING);
        echo '<br/>';
        print_r($test);   

        $prices2 = array('Tires' => 100 , 'Oil' => 10 , 'Spark' => 4);

        asort($prices2);

        echo '<br/>';
        print_r($prices2);   

        ksort($prices2);  

        echo '<br/>';
        print_r($prices2);   

        // sort rsort
        // asort arsort
        // ksort krsort
     ?>
</body>
</html>
