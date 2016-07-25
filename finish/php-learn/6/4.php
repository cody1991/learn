<?php
class Math
{
    const pi = 3.14159;

    public static function squared($input)
    {
        // 静态方法不能使用this

        return $input * $input;
    }
}

echo "Math::pi = " . Math::pi . "\n";

echo Math::squared(8);

class A
{

}

class B extends A
{

}

$b = new B();
echo '<br/>';
echo $b instanceof B;
echo '<br/>';
echo $b instanceof A;
echo '<br/>';
echo $b instanceof C;
echo '<br/>';

function check_hint(B $someclass)
{

}

check_hint($b);
// check_hint(1);

// 延迟静态绑定

class C
{
    public static function who()
    {
        echo __CLASS__;
    }
    public static function test()
    {
        static::who();
    }
}

class D extends C
{
    public static function who()
    {
        echo __CLASS__;
    }
}

D::test();

// $c  =  clone $b;
// __clone(){}

class myClass
{
    public $a = '5';
    public $b = '7';
    public $c = '9';

    public function hello()
    {
        return 1;
    }

    public function __toString()
    {
        // 打印出勒种所有的属性值
        return (var_export($this, true));
    }
}

$x = new myClass();
foreach ($x as $attribute) {
    echo $attribute . "<br/>";
}

echo $x;

include_once 'page.php';
$class = new ReflectionClass('Page');

echo '<pre>' . $class . '</pre>';
