<?php
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
?>
