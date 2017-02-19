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

// /Users/cody1991/Desktop/github/learn/PHP/php&mysql
// echo $_SERVER['DOCUMENT_ROOT'];

$date = date('H:i, jS F Y');

define('TRIEPRICE', 100);
define('OILPRICE', 10);
define('SPARKPRICE', 4);

$tireqty = $_POST['tireqty'];
$oilqty = $_POST['oilqty'];
$sparkqty = $_POST['sparkqty'];

echo $tireqty . ' tries<br/>';
echo $oilqty . ' bottles of oil<br/>';
echo $sparkqty . ' spark plugs<br/>';
echo 'Address to ' . $address;

$totalqty = 0;
$totalqty = $tireqty + $oilqty + $sparkqty;

$totalprice = 0;
$totalprice = $tireqty * TRIEPRICE + $oilqty * OILPRICE + $sparkqty * SPARKPRICE;

echo 'Total Quantity: ' . $totalqty;
echo '<br/>Total Price: ' . number_format($totalprice, 2);

$taxrate = 0.10;
$totalprice = $totalprice * (1 + $taxrate);
echo '<br/>Total Price with tax: ' . number_format($totalprice, 2);

echo "<pre>";
$outputstrings = $date . "\t" . $tireqty . " tires\t" . $oilqty . " oil\t" . $sparkqty . " spark\t\$" . $totalprice . "\t" . $address . "\n";
echo "</pre>";

echo $outputstrings;
// $fp = @fopen('./orders/orders.txt', 'ab'); 也可以这样
@$fp = fopen('./orders/orders.txt', 'ab');

echo "<br/>";
if (file_exists('./orders/orders.txt')) {
	echo 'There are orders waiting to be processed.';
	echo "<br/>";
	echo filesize('./orders/orders.txt');
} else {
	echo 'There are currently no orders';
}

if (!$fp):
	echo '<p>Your order could not be procressed at this time.';
	exit;
endif;

flock($fp, LOCK_EX);

fwrite($fp, $outputstrings, strlen($outputstrings));

// flock($fp,operation)

// LOCK_SH 读操作锁定，意味文件可以共享，其他人可以读该文件
// LOCK_EX 写操作锁定，互斥的，文件不能被共享
// LOCK_UN 释放已有的锁定
// LOCK_NB 防止在请求加锁时发生阻塞
flock($fp, LOCK_UN);
fclose($fp);

// unlink('./orders/orders.txt');

echo "<p>Order written.</p>";
?>
</body>
</html>
