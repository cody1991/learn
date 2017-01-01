<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php 
        // resource fopen(string filename,string mode,[,bool use_include_path [,resource content]]);

        // $name = "1.php";
        // $openmode = 'r';
        // $fp = fopen($name,$openmode);

        // echo $fp;

        // 函数调用不区分大小写

    // func_num_args()
    // func_get_arg()
    // func_get_args()

    function create_table($data,$border=1,$cellpadding=4,$cellspacing=4){

        echo "<p>number of params :" . func_num_args() . "</p>";

        $args = func_get_args();
        foreach($args as $arg){
            echo $arg . "<br/>";
        }

        echo "<table border=\"$border\" cellpadding=\"$cellpadding\" cellspacing=\"$cellspacing\">";
        reset($data);

        $value = current($data);
        while($value){
            echo "<tr><td>" . $value . "</td><tr/>\n";
            $value = next($data);
        }
        echo "</table>";
    }

    $my_array = array("Line one","Line two","Line three.");
    create_table($my_array,3,8,8);
    ?>
</body>
</html>
