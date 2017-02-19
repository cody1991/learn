<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <?php
@$fp = fopen('./orders/orders.txt', 'rb');
if (!$fp) {
	echo '<p>No orders pending</p>';
	exit;
}

flock($fp, LOCK_SH);
while (!feof($fp)) {
	// 每次读取一行内容，遇到了一个 \n 或者 文件结束符，或者文件读取了 998b ，最大长度是 指定长度 -1b

	// fgetss($fp, length, string[allowable_tags])
	// fgetss 可以过滤字符串中包含了 php 和 html 标记
	// 如果要过滤任何特殊的标记，可以把它们包含在 第三个参数重。
	// 读取包含用户输入的文件，或者出于安全考虑，可以用 fgetss()

	// fgetcsv($fp,length, string delimiter, string enclosure)
	// 如果使用了定界符，比如我们前面的制表符号，或者电子制表软件和其他应用程序中的逗号，可以用它把文件分成多行
	// 如果想重新构建订单中的变量，而不是整个订单作为一行文本，用 fgetcsv 函数可以很容易实现，可以像 fgets() 一样调用它，这个时候传递i 个勇于分隔表单域的定界符，比如
	$order = fgetcsv($fp, 100, "\t");

	echo "<pre>";
	print_r($order);
	echo "</pre>";

	// Array
	// (
	//     [0] => 08:48, 19th February 2017
	//     [1] => 1 tires
	//     [2] => 7 oil
	//     [3] => 4 spark
	//     [4] => $204.6
	//     [5] => shenzhen
	// )

	// 上面读取一行，并且在有制表符的地方把文件内容分行，这个函数返回一个数组
	// $order = fgets($fp, 999);
	echo '<br/>';
}

flock($fp, LOCK_UN);
echo 'Final position of the file pointer is ' . (ftell($fp));
echo "<br/>";
rewind($fp);

echo "After rewind, the position is " . (ftell($fp));
echo "<br/>";
?>
</body>
</html>
