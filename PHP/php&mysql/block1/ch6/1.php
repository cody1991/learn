<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
<?php
class className {
	function __construct($param) {
		echo "Constructor called with parameter " . $param . "<br/>";
	}

	// __get __set 不可访问的才有用
	function __get($name) {
		echo "<br/>Get $name";
		return $this->$name;
	}

	function __set($name, $value) {

		if (($name == "attribute") && ($value >= 0) && ($value <= 100)) {
			echo "<br/>Set $name";
			$this->$name = $value;
		}
	}

	private $attribute;

	function operation($param) {
		$this->attribute = $param;
	}
}

$a = new className('first');
$b = new className('second');

$a->attribute = 100;

$a->attribute;

?>
</body>
</html>
