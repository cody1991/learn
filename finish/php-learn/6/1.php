<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php 
        class myclass{
            private $attribute1;
            private $attribute2;
            public $c;
            public $d = 0;

            function __construct($param){
                echo "Constructor called with parameter " . $param . "<br/>"; 
            }

            function operation1($param){
                $this->attribute1 = $param;
                echo $this->attribute1;
            }

            function operation2($param1,$param2){
                echo 'operation2' . '<br/>' . $param1 . ' ' . $param2 . '<br/>';
            }

            // 只对private有用
            function __get($name){
                echo "_get : " . $name . '<br/>';
                return $this->$name;
            }

            // 只对private有用
            function __set($name,$value){

                if(($name="attribute1") && ($value >=0) && ($value <=100)){
                    echo "_set : " . $name . '<br/>';
                    $this->$name = $value;
                }
            }

            function __destruct(){

            }
        }

        $myclass1 = new myclass('hello');

        $myclass1->attribute1 = '124';
        echo $myclass1->attribute1 . '<br/>';
        echo $myclass1->attribute2 . '<br/>';
        echo $myclass1->c . '<br/>';
        echo $myclass1->d . '<br/>';

        $myclass1->operation2(123,'43');
    ?>
</body>
</html>
