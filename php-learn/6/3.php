<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
class A
{
    public $attribute = 'default value';
    public function operation()
    {
        echo 'Something<br/>';
        echo "The value of \$attribute is" . $this->attribute . '<br/>';
    }
}

class B extends A
{
    public $attribute = 'different value';
    public function operation()
    {
        echo "Something else<br/>";
        echo "The value of \$attribute is" . $this->attribute . '<br/>';

        // 调用父类的
        parent::operation();
    }
}

$a = new A();
$a->operation();

$b = new B();
$b->operation();

// 可以使用final class A{}
// final function operation() 禁止继承

// 不支持多重继承 ， 不支持多个父元素
// 可以使用接口
// 接口的思想是 指定一个实现了该接口的类必须实现的一系列函数
// 例如需要一系列能显示自身的类
// 除了可以定义具有display()函数的父类，同时使这些子类都继承该父类的重载方法外，还可以实现一个接口

interface Displayable
{
    public function display();
}

class webPage implements Displayable
{
    function display()
    {

    }
}
?>
</body>

</html>
