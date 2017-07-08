<?php
class myclass {
	public $attribute1;
	public $attribute2;
	private $attribute;

	function __get($name) {
		echo $name;
		return $this->$name;
	}

	function __set($name, $value) {
		echo $value;
		if (($name == 'attribute') && ($value >= 0) && ($value <= 100)) {
			$this->$name = $value;
		}

	}

	function operation($param) {
		$this->attribute = $param;
		echo $this->attribute;
	}

	function __construct($param) {
		echo "Constructor called with parameter " . $param . "<br/>";
	}

	function operation1() {

	}

	function operation2($param1, $param2) {

	}
}

$a = new myclass("First");
$b = new myclass("Second");

$b->operation(100);
// $c = new myclass();

$a->attribute = "value";
echo $a->attribute;

class A {
	protected $attr = "A";

	private function oper1() {
		echo "oper1 called";
	}
	protected function oper2() {
		echo "oper2 called";
	}
	public function oper3() {
		echo "oper3 called";
	}
	public function oper4() {
		echo "parent::oper4";
		// 如果 attr 是 private 这里输出A的
		// 如果是 publich protected 输出B的，这两种可以继承
		echo $this->attr;
	}
}

class B extends A {
	protected $attr = "B";
	function __construct() {
		// $this->oper1();
		$this->oper2();
		$this->oper3();

		parent::oper4();
	}
}

$b = new B;
// $b->oper2(); 外部不可访问

interface Displayable {
	function display();
}

class webPage implements Displayable {
	function display() {

	}
}

echo "<br/>";
echo "<br/>";
echo "<br/>";
echo "<br/>";

// pre-class
class Math {
	const pi = 3.14159;
	static function squared($input) {
		return $input * $input;
	}
}

echo "Math::pi = " . Math::pi . " <br/>";
echo Math::squared(8) . "<br/>";

class myclass2 {
	public $a = '4';
	public $b = '5';
	public $c = '6';
}

$mc = new myclass2;
foreach ($mc as $key => $attribute) {
	echo $key . ' : ' . $attribute . "<br/>";
}

?>
