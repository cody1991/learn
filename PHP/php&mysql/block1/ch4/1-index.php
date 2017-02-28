<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
<?php

require 'settings.php';
require 'vendor/autoload.php';

$total_shipping = 34.2;
$total = 430.0;

printf("Total amount of order is %2\$.2f (with shipping %2\$.2f) <br/>", $total_shipping, $total);

$username = trim($_POST['username']);
$email = trim($_POST['email']);
$feedback = trim($_POST['feedback']);

if (!preg_match('/^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/', $email)) {
	echo 'Not valid email';
} else {
	echo 'Valid email';
}

echo "<hr/>";

$arr = preg_split('/\.|@/', $email);

while (list($key, $value) = each($arr)) {
	echo "<br/>" . $value;
}

echo "<hr/>";

$token = strtok($feedback, " ");
echo $token . "<hr/>";

while ($token != "") {
	// $token 相当于一个指针
	// 这里不需要写入 $feedback 了，不然一直是第一个空格前的字符，因为重置了指针
	$token = strtok(" ");
	echo $token . "<hr/>";
}

$subject = 'Feedback from web site';
$mailContent = "Customer name: $username \n" .
	"Customer email: $email \n" .
	"Customer comments: \n\n$feedback. \n\n";

// echo "<pre>";
// print_r($mailContent);
// echo "</pre>";

// nl2br

echo nl2br($mailContent);
// echo nl2br(strtoupper($mailContent));
// echo nl2br(strtolower($mailContent));
// echo nl2br(ucfirst($mailContent)); // 第一个字母就转成大写
// echo nl2br(ucwords($mailContent)); // 每个单词的第一个字符转为大写

echo 'get_magic_quotes_gpc' . get_magic_quotes_gpc() . '<hr/>';

// 加反斜杠
echo nl2br(addslashes($mailContent));

// 去掉反斜杠
echo nl2br(stripcslashes(addslashes($mailContent)));

$transport = \Swift_SmtpTransport::newInstance('smtp.qq.com', 465, 'ssl')
	->setUsername('476490767@qq.com')
	->setPassword($settings['shouquanma']);

$mailer = \Swift_Mailer::newInstance($transport);
$message = \Swift_Message::newInstance()
	->setSubject('New feedback!')
	->setFrom(array('476490767@qq.com' => 'Cody'))
	->setTo(array('476490767@qq.com'))
	->setBody($mailContent);

// $result = $mailer->send($message);

// explode(分隔符，字符串），分割字符串

// implode() join() 实现反向效果
?>
</body>
</html>
