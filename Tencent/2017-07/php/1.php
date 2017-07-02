<?php
class BaseClass {
	function __construct() {
		print "In BaseClass constructor\n";
	}
}

class SubClass extends BaseClass {
	function __construct() {
		parent::__construct();
		print "In SubClass constructor\n";
	}
}

class OtherSubClass extends BaseClass {

}

$obj = new BaseClass();
$obj = new SubClass();
$obj = new OtherSubClass();

class A {
	function __construct() {
		$a = func_get_args();
		$i = func_num_args();

		if (method_exists($this, $f = '__construct' . $i)) {
			call_user_func_array(array($this, $f), $a);
		}

	}
	function __construct1($a1) {
		echo ('__construct with 1 param called: ' . $a1 . PHP_EOL);
	}

	function __construct2($a1, $a2) {
		echo ('__construct with 2 params called: ' . $a1 . ',' . $a2 . PHP_EOL);
	}

	function __construct3($a1, $a2, $a3) {
		echo ('__construct with 2 params called: ' . $a1 . ',' . $a2 . ',' . $a3 . PHP_EOL);
	}
}

$o = new A('sheep');
$o = new A('sheep', 'cat');
$o = new A('sheep', 'cat', 'dog');

class Bar {
	public function test() {
		print_r($this);
		$this->testPrivate();
		$this->testPublic();
	}

	public function testPublic() {
		echo "Bar::testPublic\n";
	}

	private function testPrivate() {
		echo "Bar::testPrivate\n";
	}
}

class Foo extends Bar {
	public function testPublic() {
		echo "Foo::testPublic\n";
	}

	private function testPrivate() {
		echo "Foo::testPrivate\n";
	}
}

$myFoo = new foo();
$myFoo->test();
?>
