<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
<?php
$tireqty = $_POST['tireqty'];
$oilqty = $_POST['oilqty'];
$sparkqty = $_POST['sparkqty'];
$address = $_POST['address'];

$products = array('tires', 'oil', 'spark');

echo "$products[0] $products[1] $products[2]<br/>";

foreach ($products as $current) {
	echo $current . " ";
}

$prices = array("tries" => 100, 'oil' => 10, 'spart' => 4);

echo "<hr/>";

foreach ($prices as $key => $value) {
	echo $key . " - " . $value . "<br/>";
}

echo "<hr/>";

reset($prices);

while ($element = each($prices)) {
	print_r($element);
	echo $element['key'];
	echo " - ";
	echo $element['value'];
	echo "<br/>";
}

echo "<hr/>";
reset($prices);

while (list($product, $price) = each($prices)) {
	echo "$product - $price<br/>";
}

echo "<hr/>";

$products2 = array(
	array('TIR', 'TIRES', 100),
	array('OIL', 'oil', 10),
	array('SPK', 'spark', 4),
);

echo ' | ' . $products2[0][0] . ' | ' . $products2[0][1] . ' | ' . $products2[0][2] . ' | <br/>';
echo ' | ' . $products2[1][0] . ' | ' . $products2[1][1] . ' | ' . $products2[1][2] . ' | <br/>';
echo ' | ' . $products2[2][0] . ' | ' . $products2[2][1] . ' | ' . $products2[2][2] . ' | <br/>';

for ($row = 0; $row < 3; $row++) {
	for ($col = 0; $col < 3; $col++) {
		echo ' | ' . $products2[$row][$col];
	}
	echo ' | <br/>';
}

$products3 = array(
	array("code" => 'TIR', "des" => 'TIRES', "price" => 100),
	array("code" => 'OIL', "des" => 'oil', "price" => 10),
	array("code" => 'SPK', "des" => 'spark', "price" => 4),
);

for ($row = 0; $row < 3; $row++) {
	echo ' | ' . $products3[$row]['code'] . ' | ' . $products3[$row]['des'] . ' | ' . $products3[$row]['price'] . ' | <br/>';
}

for ($row = 0; $row < 3; $row++) {
	while (list($key, $value) = each($products3[$row])) {
		echo " | $value";
	}
	echo " | <br/>";
}

$products4 = array(
	array(
		array('car_tir', 'tire', 100),
		array('car_tir', 'oil', 10),
		array('car_spk', 'spa', 4),
	),
	array(
		array('van_tir', 'tire', 120),
		array('van_tir', 'oil', 13),
		array('van_spk', 'spa', 2),
	),
);

for ($layer = 0; $layer < 3; $layer++) {
	echo 'Layer $layer <br/>';

	for ($row = 0; $row < 3; $row++) {
		for ($col = 0; $col < 3; $col++) {
			echo ' | ' . $products4[$layer][$row][$col];
		}
		echo ' | <br/>';
	}
}

$numbers = range(1, 10);
$odds = range(1, 10, 2);
$letters = range('a', 'z');

echo "<pre>";
print_r($numbers);
echo "<pre>";

echo "<pre>";
print_r($odds);
echo "<pre>";

echo "<pre>";
print_r($letters);
echo "<pre>";

?>
</body>
</html>
