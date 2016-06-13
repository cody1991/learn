<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php 
        // 初始化一个数组 current($array_name) 指向第一个
        // next() each() 都会往前走一个元素  each 会在指针前移前返回当前元素  next 前移后返回元素
        // reset() 返回指向第一个元素的指针
        // end() 指针到末尾
        // prev()

        $array = array(1,2,3);

        $value = end($array);

        while($value){
            echo "$value<br/>";
            $value = prev($array);
        }

        function my_print($value){
            echo "$value<br/>";
        }

        array_walk($array,'my_print');
        
        function my_multiply(&$value,$key,$factor){
            $value *= $factor;

            echo $value . ' ' . $key . '<br/>';
        }

        array_walk($array,'my_multiply',4);

        print_r($array);

        $array2 = array(4,5,1,2,3,1,2,1);

        $ac = array_count_values($array2);

        print_r(count($array2));
        print_r(sizeof($array2));
        print_r($ac);

        $array = array('key1' => 'value1' , 'key2' => 'value2' , 'key3' => 'value3');

        extract($array);

        // 通过一个数组创建一系列的标量变量，变量名称的关键字，变量值是值

        // 第二个参数是告诉冲突的处理
        // 默认是覆盖已有变量 EXTR_OVERWRITE

        // EXTR_PREFIX_ALL
        echo "$key1 $key2 $key3";

        extract($array,EXTR_PREFIX_ALL,'my_prefix');

        echo "$my_prefix_key1";
    ?>
</body>
</html>
