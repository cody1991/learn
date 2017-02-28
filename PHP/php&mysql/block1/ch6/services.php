<?php
require '2.php';
// $homepage = new Page();

// $homepage->content = "<p>contact</p>";

// $homepage->display();

class ServicesPage extends Page {

	// per class 可以在不初始化类的情况下使用
	const pi = 3.14;

	// static 可以在不初始化类的情况下使用
	// 在里面不能使用 this 可能没有初始化的对象

	static function squared($input) {
		return $input * $input;
	}

	private $row2buttons = array(
		"Re-engineering" => "reenginnering.php",
		"Standards Compliance" => "standards.php",
		"Buzzword" => "buzzword.php",
		"Mission" => "mission.php",
	);

	public function Display() {
		echo "<html>\n<head>\n";
		$this->DisplayTitle();
		$this->DisplayKeywords();
		$this->DisplayStyle();

		echo "</head>\n<body>\n";
		$this->DisplayHeader();
		$this->DisplayMenu($this->buttons);
		$this->DisplayMenu($this->row2buttons);
		echo $this->content;
		$this->DisplayFooter();
		echo "</body>\n</html>\n";
	}
}

$services = new ServicesPage();

$services->content = "<p>Services</p>";

$services->Display();

echo "<br/>" . ServicesPage::pi;

echo "<br/>" . ServicesPage::squared(8);

echo "<br/>" . $services instanceof ServicesPage;

// 一些方法，可以用 function (className $someclass){} 指定要传入的类

class A {
	public static function who() {
		echo __CLASS__;
	}

	public static function test() {
		static::who();
	}
}

class B extends A {
	public static function who() {
		echo __CLASS__;
	}
}
echo "<br/>";
B::test();

class myClass {
	public $a = 5;
	public $b = 7;
	public $c = 9;
}
echo "<hr/>";
$x = new myClass();
foreach ($x as $attributes) {
	echo $attributes . "<br/>";
}
?>
