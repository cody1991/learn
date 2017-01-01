<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php 
        class A{
            public $attribute1;
            function operation1(){
                echo 'public operation1' . '<br/>';
            }
            private function operation3(){
                echo 'private operation3' . '<br/>';
            }
            protected function operation4(){
                echo 'protected operation4' . '<br/>';
            }
        }
        class B extends A{
            public $attribute2;
            function operation2(){

            }
            function __construct(){
                $this->operation1();
                $this->operation4();
                // $this->operation3();
                // 报错
            }
        }

        $b = new B();
        $b->operation1();
        $b->attribute1 = 10;
        $b->operation2();
        $b->attribute2 = 10;

        // $b->operation4();
        // 报错 protected 只能在子类内部使用
    ?>
</body>
</html>
