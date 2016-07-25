<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php 
        $products2 = array(
            array(
                    'Code' => 'TIR',
                    'Description' => 'Tires',
                    'Price' => 100
                ),
            array(
                    'Code' => 'OIL',
                    'Description' => 'Oil',
                    'Price' => 10
                ),
            array(
                    'Code' => 'SPK',
                    'Description' => 'Spark Plugs',
                    'Price' => 4
                )
        );

        function compare($x,$y){
            if($x['Description'] == $y['Description']){
                return 0;
            }else if($x['Description'] < $y['Description']){
                return -1;
            }else{
                return 1;
            }
        }
        // 对第二行进行排序


        usort($products2,'compare');

        echo '<hr/>';

        print_r($products2);

        // usort
        // uasort
        // uksort

        // array_reverse() 反转数组
        // shuffle() 随机排序
     ?>
</body>
</html>
