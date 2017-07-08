<?php
$cody = "\"Cody learn php";

$feedback = addslashes($cody);

echo $feedback;

$feedback = stripcslashes($feedback);

echo $feedback;

echo get_magic_quotes_gpc();

$total = 300;

printf("Total amount of order is %s .", $total);
printf("Total amount of order is %.2f .", $total);

$feedback = "Learn p\"hp !!\n 12\"3";

$token = strtok($feedback, '"');
echo $token . "<br/>";

while ($token != "") {
	$token = strtok(" ");
	echo $token . "<br/>";
}

$test = "Your customer service";
$test2 = substr($test, 1);

echo $test . $test2;

$toaddress = 'shop@example.com';

if (strstr($toaddress, 'shop')) {
	$toaddress = 'retail@example.com';
}

print($toaddress);

$feedback = "cody 123";
$feedback = str_replace('cody', 'CODY', $feedback);
print($feedback);
$feedback = substr_replace($feedback, 'haha', 1);
print($feedback);

$mail = '476490767@qq.com';

if (preg_match('/^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/', $mail)) {
	echo "Match<br/>";
}

$mail = '476490767@qq.com 476490767@qq.com';

$mail = preg_replace('/[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+/', '***', $mail);

echo $mail;

$mail = "username@example.com";

$arr = preg_split("/\.|@/", $mail);

while (list($key, $value) = each($arr)) {
	echo "$key -> $value <br/>";
}
?>
