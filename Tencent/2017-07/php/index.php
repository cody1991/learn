<?php
namespace NS {
	class ClassName {

	}
	echo ClassName::class;

	$arr = array(1, 2, 3, 4);
	foreach ($arr as &$value) {
		$value = $value * 2;
	}

	print_r($arr);
	unset($value);

	while (list(, $value) = each($arr)) {
		echo "Value: $value <br/>\n";
	}

	reset($arr);

	print_r(each($arr));
// print_r(list(, $value) = each($arr));

	$arr = [
		[1, 2],
		[3, 4],
	];

	foreach ($arr as list($a, $b)) {
		echo "A: $a; B: $b\n";
	}

	class SimpleClass {
		public $var = 'a default value';
		public function displayVar() {
			echo $this->var;
		}
	}

	class ExtendClass extends SimpleClass {
		function displayVar() {
			echo "Extending class\n";
			parent::displayVar();
		}
	}

	$extended = new ExtendClass();
	$extended->displayVar();
}

?>
