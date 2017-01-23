<pre>
<?php
// 一个类可以包含有属于自己的常量，变量（称为“属性”）以及函数（称为“方法”）。
class SimpleClass {
	public $var = 'a default value';
	public function displayVar() {
		echo $this->var;
	}
}

$simple = new SimpleClass();

$simple->displayVar();
echo "<br/>";
echo $simple->var;

class A {
	function foo() {
		if (isset($this)) {
			echo '$this is defined (';
			// 获取它的 class
			echo get_class($this);
			echo ")\n";
		} else {
			echo "\$this is not defined.\n";
		}
	}
}

class B {
	function bar() {
		A::foo();
	}
}
echo "<br/>";
$a = new A();
$a->foo();

A::foo();

$b = new B();
$b->bar();

B::bar();

// $instance = new SimpleClass();
// $className = 'Foo';
// $instance = new $className(); // Foo()
?>
</pre>
