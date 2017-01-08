<?php 
class MyClass{

}
class NotMyClass{

}

$a = new MyClass();

var_dump($a instanceof MyClass);
var_dump($a instanceof NotMyClass);

class ParentClass{

}

class ChildClass extends ParentClass{

}

$a = new ChildClass();

var_dump($a instanceof ParentClass);
var_dump($a instanceof ChildClass);

interface MyInterface{

}

class inter implements MyInterface{

}

$a = new inter();
var_dump($a instanceof inter);
var_dump($a instanceof MyInterface);

$a = 1;
$b = NULL;
$c = imagecreate(5,5);
$d = FALSE;

var_dump($a instanceof stdClass); // $a is an interger
var_dump($b instanceof stdClass); // $b is NULL
var_dump($c instanceof stdClass); // $c is a resource
var_dump($d instanceof stdClass)

?>
