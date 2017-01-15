<?php
// 没有参数，表示当前时间的实例
$datetime = new DateTime();

$datetime2 = new DateTime('2014-04-27 5:03 AM');

// 有了 DateTime::createFromFormat() 静态方法，我们可以使用自定义的格式创建 DateTime 实例
// 这里不需要 new
$datetime3 = DateTime::createFromFormat('M j, Y H:i:s', 'Jan 2, 2014 23:04:12');

print_r($datetime);
echo '<br/>';
print_r($datetime2);
echo '<br/>';
print_r($datetime3);
echo '<br/>';

$interval = new DateInterval('P2W');

$datetime->add($interval);
echo $datetime->format('Y-m-d H:i:s');

$interval2 = DateInterval::createFromDateString('-1 day');
$datePeriod = new DatePeriod($datetime,$interval2,3);
echo "<pre>";
foreach($datePeriod as $date){
  echo $date->format('Y-m-d'),PHP_EOL;
}
echo "</pre>";
