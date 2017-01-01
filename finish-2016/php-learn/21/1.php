<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
echo date('jS F Y');
// 17th June 2016
// a 上午或者下午 am pm;
// A 上午或者下午 AM PM;
// d 日期 01 - 31;
// D 三个缩略字符表示的星期 Mon ~ Sun;
// ......;
// j 数字型 表示日期 1到31;
// S 表示后缀 包括 st nd rd th;
// F 月份 从 'January' ~ 'December';
// y 两位数字月份 如 '08';
// Y 四位数字月份 如 '2008';

// $timestamp = time();
// 表示现在
echo '<br/>';
$nextweek = time() + (7 * 24 * 60 * 60);
echo "Now:" . date('Y-m-d') . "\n";
echo "Next week:" . date('Y-m-d', $nextweek) . "\n";

echo "<br/>";
print_r(getdate());
echo "<br/>";

// checkdate(month,day,year);
echo checkdate(2, 29, 2008) . '<br/>';
echo checkdate(2, 29, 2007) . '<br/>';

// 两位数的月份 %m 两位数的日期 %d 四位数的年份%Y
// SELECT DATA_FORMAT(data_column,'%m %d %Y')
// FROM tablename;

// SELECT UNIX_TIMESTAMP(data_column)
// FROM tablename

$day   = 18;
$month = 9;
$year  = 1972;

// int mktime(hour,minute,second,month,day,year);
$bdayunix = mktime(0, 0, 0, $month, $day, $year);
$nowunix  = time();

$ageunix = $nowunix - $bdayunix;
$age     = floor($ageunix / (365 * 24 * 60 * 60));

echo "Age is $age <br/>";
?>
</body>
</html>
