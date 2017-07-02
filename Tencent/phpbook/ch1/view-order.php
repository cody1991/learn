<?php

$DOCUMENT_ROOT = $_SERVER['DOCUMENT_ROOT'];

// @$fp = fopen("{$DOCUMENT_ROOT}/logs/orders.txt", 'rb');

// if (!$fp) {
// 	echo "看不了";
// 	exit;
// }

$orders = file("{$DOCUMENT_ROOT}/logs/orders.txt");
$numbers_of_orders = count($orders);

foreach ($orders as $key => $value) {
	// echo $value . "<br/>";
	$line = explode("\t", $value);
	$line[1] = intval($line[1]);
	$line[2] = intval($line[2]);
	$line[3] = intval($line[3]);

	echo "$line[1] $line[2] $line[3] <br/>";

}

// while (!feof($fp)) {
// 	// 遇到一个换行 文件结束符 或者 读入999b

// // fgetss 有第三个参数 可以过滤 html 标记
// 	$order = fgets($fp, 999);
// 	echo $order . "<br/>";
// }

// while (!feof($fp)) {
// 	$order = fgetcsv($fp, 100, "\t");
// 	print_r($order);
// 	echo "<br/>";
// 	// 获取到下面这种数组格式的
// 	// Array ( [0] => 23:21, 2nd July 2017 [1] => 2tires [2] => 3oil [3] => 2spark [4] => $261.8 [5] => tencent )
// 	// Array ( [0] => 23:22, 2nd July 2017 [1] => 2tires [2] => 3oil [3] => 2spark [4] => $261.8 [5] => tencent )
// 	// Array ( [0] => 23:22, 2nd July 2017 [1] => 2tires [2] => 3oil [3] => 2spark [4] => $261.8 [5] => tencent )
// 	// Array ( [0] => 23:22, 2nd July 2017 [1] => 2tires [2] => 3oil [3] => 2spark [4] => $261.8 [5] => tencent )
// }

// 上面都是一行行读取的方法

// readfile(filename) 不需要 fopen
// file 两个一样，读成数组

// fopen fpassthru($fp)

// 读字符串的 fgetc

// file_exists 是否存在
$file = "{$DOCUMENT_ROOT}/logs/orders.txt";

echo file_exists($file) . PHP_EOL;
echo filesize($file);

// nl2br() 把 \n 转换成 <br/>

// unlink($file) 删除订单

// rewind 把指针复位刀开始
// ftell 告诉位置
// fseek 跳到那个位置

// fclose($fp);
?>
