<?php
function create_table($data, $border = 1, $cellpadding = 4, $cellsapcing = 4) {
	echo "<table border=\"$border\" cellpadding=\"$cellpadding\" cellsapcing=\"$cellsapcing\">";

	reset($data);

	$value = current($data);
	while ($value) {
		echo "<tr><td>" . $value . "</td></tr>\n";
		$value = next($data);
	}

	echo "</table>";
}

$my_array = array("Line one", "Line two", "Line three");

create_table($my_array, 2, 8, 8);

function var_args() {
	echo "Number of parameters: ";
	echo func_num_args();

	echo "<br/>";

	$args = func_get_args();

	foreach ($args as $arg) {
		echo $arg . "<br/>";
	}
}

var_args(1, 2, 3, 4, 5, 6);

function reverse_r($str) {
	if (strlen($str) > 0) {
		echo "<br/>Debug : " . substr($str, 1) . "</br>";
		reverse_r(substr($str, 1));
	}

	echo "<br/>Debug :</br>";

	echo substr($str, 0, 1);
	return;
}

reverse_r('Hello');

function reverse_i($str) {
	for ($i = 1; $i <= strlen($str); $i++) {
		echo substr($str, -$i, 1);
	}
	return;
}

reverse_i('Hello');

?>
