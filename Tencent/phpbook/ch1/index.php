<?php

define("TIRPRICE", 100);
define("OILPRICE", 10);
define("SPARTPRICE", 4);
define("TAX", 0.10);

$DOCUMENT_ROOT = $_SERVER['DOCUMENT_ROOT'];

date_default_timezone_set('Asia/Shanghai');
// H 小时
// i 分钟
// j 日期， S 是后缀，比如 th
// F 月份全称
$date = date('H:i, jS F Y');

$tirCount = $_REQUEST['tirCount'];
$oilCount = $_REQUEST['oilCount'];
$spartCount = $_REQUEST['spartCount'];
$address = $_REQUEST['address'];

echo "<br/>Count: $tirCount  $oilCount  $spartCount<br/>";

$totalCount = $tirCount + $oilCount + $spartCount;

echo "<br/>Total Count $totalCount";
$totalAmount = $tirCount * TIRPRICE + $oilCount * OILPRICE + $spartCount * SPARTPRICE;
echo "<br/>Total Amount: " . number_format($totalAmount, 2) . "<br/>";

$totalAmount = $totalAmount * (1 + TAX);

echo "<br/>Total Amount: " . number_format($totalAmount, 2) . "<br/>";

@$fp = fopen("{$DOCUMENT_ROOT}/logs/orders.txt", 'ab');

if (!$fp) {
	echo "存失败";
	exit;
}

// 写入用 fwrite
// fwrite($fp,$outputstring,length)

// fwrite 和 fputs 一样
// fwrite 另外一个替换的事 file_put_contents
// file_put_contents (filename, data, [flags, content])

// 对应的 file_get_contents

$outputstring = $date . "\t" . $tirCount . "tires\t" . $oilCount . "oil\t" . $spartCount . "spark\t\$" . $totalAmount . "\t" . $address . "\n";

flock($fp, LOCK_EX);
fwrite($fp, $outputstring, strlen($outputstring));

// flock 锁起来

flock($fp, LOCK_UN);

fclose($fp);
?>
