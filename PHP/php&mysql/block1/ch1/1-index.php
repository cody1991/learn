<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <table border="0" cellpadding="3">
    <tr>
      <td bgcolor="#ccc" align="center">Distance</td>
      <td bgcolor="#ccc" align="center">Cost</td>
    </tr>
<?php
$distance = 50;
while ($distance <= 250) {
	echo "<tr>
    <td align=\"center\">" . $distance . "</td>
      <td align=\"center\">" . ($distance / 10) . "</td>
    </tr>";
	$distance += 50;
}
?>
  </table>
  <h1>Bob's Auto Parts</h1>
  <h2>Order Results</h2>
<?php

ini_set('date.timezone', 'Asia/Shanghai');

echo '<p>Order processed.</p>';

# 01:52, 19th February 2017
/*
H 24小时制的小时
i 分钟

上面两个个位数的话会补0

jS j 是日期，不需要补 0 s 后缀
F 月份的全称
Y 年份

具体在21章看，现在也没必要全部记住
 */
echo date('H:i, jS F Y');

echo '<p>Order processed ' . date('H:i, jS F Y') . '</p>';

define('TRIEPRICE', 100);
define('OILPRICE', 10);
define('SPARKPRICE', 4);

$tireqty = $_POST['tireqty'];
$oilqty = $_POST['oilqty'];
$sparkqty = $_POST['sparkqty'];

echo $tireqty . ' tries<br/>';
echo $oilqty . ' bottles of oil<br/>';
echo $sparkqty . ' spark plugs<br/>';

switch ($_POST['find']) {
case 'a':
	echo "<p>I'm a regular customer</p>";
	break;
case 'b':
	echo "<p>TV advertising</p>";
	break;
case 'c':
	echo "<p>Phone directory</p>";
	break;
case 'd':
	echo "<p>Word of mouth</p>";
	break;

default:
	echo "<p>We do not know how this customer found us.";
	break;
}

echo <<<theEnd
<pre>
  line1
  line2
  line3
  $tireqty trires
  $oilqty bottles of oil
  $sparkqty spark plugs
</pre>
theEnd;

$totalqty = 0;
$totalqty += $tireqty + $oilqty + $sparkqty;

if ($totalqty == 0):

endif;

$totalprice = 0.00;
$totalprice += $tireqty * TRIEPRICE + $oilqty * OILPRICE + $sparkqty * SPARKPRICE;

echo 'Total Quantity: ' . $totalqty;
echo '<br/>';
// echo 'Total Price: ' . $totalprice;
// 应该加上格式
echo 'Total Price: ' . number_format($totalprice, 2);

$taxrate = 0.10;
$totalprice = $totalprice * (1 + $taxrate);
echo '<br/>Total Price with tax: ' . number_format($totalprice, 2);

echo "<pre>";
print_r($GLOBALS);
echo "</pre>";

echo "<hr/>";

echo "<pre>";
print_r($_SERVER);
echo "</pre>";

echo "<hr/>";

echo "<pre>";
print_r($_POST);
echo "</pre>";

echo "<hr/>";

echo "<pre>";
print_r($_GET);
echo "</pre>";

echo "<hr/>";

echo "<pre>";
print_r($_COOKIE);
echo "</pre>";

echo "<hr/>";

echo "<pre>";
print_r($_FILES);
echo "</pre>";

echo "<hr/>";

echo "<pre>";
print_r($_ENV);
echo "</pre>";

echo "<hr/>";

echo "<pre>";
print_r($_REQUEST);
echo "</pre>";

echo "<hr/>";

echo "<pre>";
// print_r($_SESSION);
echo "</pre>";

$a = 5;
$b = &$a;
$a = 7;
echo "<br/> a: $a, b: $b";

unset($a);
// $a 没了，破坏了 $a 和 7 保存在内存中的链接
echo "<br/> b: $b";

// echo $a = $b;

// 没有错误的话，是 undefined
echo @$php_errormsg;

echo "<pre>";
$out = `ls -la`;
echo $out;
echo "</pre>";

class sampleCLass {

}

$myobject = new sampleClass();

if ($myobject instanceof sampleClass) {
	echo 'myobject is an instance of sampleClass';
}

echo '<hr/>';

$a = 56;
echo gettype($a) . '<br/>';

settype($a, 'double');
echo gettype($a) . '<br/>';

echo is_double($a) . '<br/>';

echo 'isset($tireqty):' . isset($tireqty) . '<br/>';
echo 'isset($nothere):' . empty($nothere) . '<br/>';

$b = '56';
echo '56 to 16 base : ' . intval($b, 16);
?>
</body>
</html>
