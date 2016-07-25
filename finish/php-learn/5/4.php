<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php 
        function increment(&$value,$amout=1){
            $value = $value + $amout;
        }

        $a = 10;
        increment($a);

        echo $a . '<br/>';

        function reverse_r($str){
            echo $str . '<hr/>';
            if(strlen($str) > 0){
                reverse_r(substr($str,1));
            }
            echo substr($str,0,1);
            return;
        }

        reverse_r('Hello');

        function reverse_i($str){
            for($i = 1 ; $i <= strlen($str);$i++){
                echo substr($str,-$i,1);
            }
            return;
        }

        reverse_i('Hello');
    ?>
</body>
</html>
