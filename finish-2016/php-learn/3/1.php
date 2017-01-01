<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php 
        $products = array('Tires','oil','Spark Plugs');
        $products[0] = 'Fuses';
        $products[3] = 'cody';

        for($i = 0 ; $i < 4 ; $i++){
            echo $products[$i] . ' ';
        }

        echo '<br/>';

        foreach($products as $key => $current){
            echo $key . ' ' . $current . '<br/>';
        }

        $number = range(1,10);
        $odds = range(1,10,2);
        $letters = range('a','z');
     ?>
</body>
</html>
