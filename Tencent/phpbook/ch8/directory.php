<?php

$url = $_REQUEST['url'];
$email = $_REQUEST['email'];

$url = parse_url($url);
$host = $url['host'];

print_r($url);
echo "<br/>";
echo $host;

if (!($ip = gethostbyname($host))) {
	echo 'Host for URL does not have valid IP';
	exit;
}

echo "Host is at IP $ip<br/>";

$email = explode('@', $email);
$emailhost = $email[1];

if (!dns_get_mx($emailhost, $mxhostsarr)) {
	echo 'Email address is not at valid host';
	exit;
}

echo 'Email is delivered via: ';
foreach ($mxhostsarr as $mx) {
	echo "$mx ";
}
?>
