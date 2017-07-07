<?php
echo "<pre>";
$numbers = range(1, 100, 3);
print_r($numbers);

$prices['tires'] = 100;
$prices['oil'] = 10;
$prices['spark'] = 4;

echo "<br/>";
foreach ($prices as $key => $value) {
	echo $key . " - " . $value . "<br/>";
}

reset($prices);

echo "<br/>";
while ($element = each($prices)) {
	echo $element['key'];
	echo " - ";
	echo $element['value'];
	echo "<br/>";
}

reset($prices);
echo "<br/>";

while (list($product, $price) = each($prices)) {
	echo "$product - $price<br/>";
}

// sort asort ksort
// shuffle array_reverse

// array_push
// array_pop

// each
// current
// reset
// end
// next
// pos
// prev
// array_count_values
// extract

$products = array("Tires", "oil", "Spark Plugs");
sort($products);

print_r($products);

$prices = array("Tires" => 100, "oil" => 10, 'Spark Plugs' => 4);
asort($prices);
print_r($prices);
ksort($prices);
print_r($prices);

$products = array(array("TIR", "TRIES", 100),
	array("OIL", 'oil', 10),
	array("Spk", "Spark", 4));

function compare($x, $y) {
	// return $x[1] - $y[1];
	if ($x[1] == $y[1]) {
		return 0;
	} else if ($x[1] < $y[1]) {
		return -1;
	} else {
		return 1;
	}
}

usort($products, 'compare');

print_r($products);
echo "</pre>";

$pics = array(1, 2, 3, 4, 5, 6);

shuffle($pics);

print_r($pics);
array_reverse($pics);
print_r($pics);
?>
