<?php
// 没有参数，表示当前时间的实例
$datetime = new DateTime();

$datetime2 = new DateTime('2014-04-27 5:03 AM');

// 有了 DateTime::createFromFormat() 静态方法，我们可以使用自定义的格式创建 DateTime 实例
// 这里不需要 new
$datetime3 = DateTime::createFromFormat('M j, Y H:i:s', 'Jan 2, 2014 23:04:12');

