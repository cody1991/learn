<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<style>
    img{
        max-width: 100px;
    }
</style>
<body>
    <?php 
        $pics = array('1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg');

        shuffle($pics);

        for($i = 0 ; $i < 3;$i++){
            echo "<td align=\"center\"><img src=\"";
            echo $pics[$i];
            echo "\" /></td>";
        }

        $numbers = array();

        for($i = 10 ; $i > 0 ;$i--){
            array_push($numbers,$i);
            // array_pop
        }
        print_r($numbers);

        $numbers = range(1,10);
        $numbers = array_reverse($numbers);


        $numbers = range(10,1,-1);
    ?>


</body>
</html>
