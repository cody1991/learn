<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
<?php

$array2 = array(4, 5, 1, 2, 3, 1, 2, 1);

$ac = array_count_values($array2);

print_r($ac);

echo "<hr/>";

$array3 = array('key1' => 'value1', 'key2' => 'value2');
// 通过一个数组创建一系列的标量变量
// 这些变量的名称必须是数组中关键字的名称，变量时数组中的值

// 它第二个参数可以看 p74
extract($array3);
echo "$key1 $key2";

// 第三个参数时添加前缀
extract($array3, EXTR_PREFIX_ALL, 'my_prefix');
echo "$my_prefix_key1 $my_prefix_key2";

echo "<hr/>";

function my_print($value) {
	echo "$value<br/>";
}

$array1 = array(1, 2, 3, 4);

array_walk($array1, 'my_print');

$value = end($array1);

while ($value) {
	echo $value . '<br/>';
	$value = prev($array1);
}

function my_multiply(&$value, $key, $factor) {
	$value *= $factor;
}

array_walk($array1, 'my_multiply', 3);

print_r($array1);

// file ()  返回的是数组
$orders = file('./orders.txt');
$number_of_orders = count($orders);

if ($number_of_orders == 0) {
	echo '<p>No orders';
}

for ($i = 0; $i < $number_of_orders; $i++) {
	echo $orders[$i] . '<br/>';
}

echo "<table border=\"1\">\n";
// explode(delimiter, string)
for ($i = 0; $i < $number_of_orders; $i++) {
	$line = explode("\t", $orders[$i]);
	// print_r($line);
	$line[1] = intval($line[1]);
	$line[2] = intval($line[2]);
	$line[3] = intval($line[3]);

	echo "<tr>
		<td> $line[1] </td>
		<td> $line[2] </td>
		<td> $line[3] </td>
		<td> $line[4] </td>
		<td> $line[5] </td>
	</tr>";
}
echo "</table>";

// array_reverse() 返回副本
// array_push()
// range(1,10,-1)

$rev = array_reverse(range(1, 10));

print_r($rev);

echo "<br/>";

$numbers = array();
for ($i = 10; $i > 0; $i--) {
	array_push($numbers, $i);
}

// array_pop() 弹出最后一个

print_r($rev);

echo "<hr/>";

$sort1 = array('tire', 'oil', 'spark');

sort($sort1);

print_r($sort1);

echo '<hr/>';

$sort2 = array(100, 10, 1);

sort($sort2);

print_r($sort2);

// sort 第二个参数可选，可以传递 SORT_REGULAR SORT_NUMERIC SORT_STRING
// 当要比较可能包含数字2 和 12 的字符串的时候，数字方面看，2 小于 12，字符串方面看 '12' 小于 '2'

// asort() 值排序 ksort() 健排序
// rsort() arsort() krsort() 反向排序

// usort() 第二个参数传入函数表示自定义的排序规则
// uasort() uksort()

// shuffle() 把数组随机排序 array_reverse() 给出一个原来数组相反的排序

echo '<hr/>';

$sort3 = array('tire' => 100, 'oil' => 10, 'spark' => 4);
asort($sort3);

print_r($sort3);

ksort($sort3);

echo '<hr/>';

print_r($sort3);

echo '<hr/>';

$sort4 = array(
	array('tir', 'tires', 100),
	array('oil', 'oil', 10),
	array('spk', 'spark', 4),
);

function compare($x, $y) {
	if ($x[1] == $y[1]) {
		return 0;
	} else if ($x[1] < $y[1]) {
		return -1;
	} else {
		return 1;
	}
}

// 传入函数字符串
usort($sort4, 'compare');

print_r($sort4);

echo '<hr/>';

$pics = array('1.png', '2.png', '3.jpg', '4.jpg');

shuffle($pics);

print_r($pics);

echo '<hr/>';

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

for ($layer = 0; $layer < 2; $layer++) {
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
