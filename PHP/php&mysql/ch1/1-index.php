<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>Bob's Auto Parts</h1>
  <h2>Order Results</h2>

<?php

ini_set('date.timezone', 'Asia/Shanghai');

echo '<p>Oder processed.</p>';

# 01:52, 19th February 2017
/*
H 小时
i 分钟

jS 日期
F 月份
Y 年份
 */
echo date('H:i, jS F Y');
?>
</body>
</html>
