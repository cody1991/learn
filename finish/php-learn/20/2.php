<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
$url   = $_POST['url'];
$email = $_POST['email'];

$url  = parse_url($url);
$host = $url['host'];

if (!($ip = gethostbyname($host))) {
    echo "Host for URL does not have valid IP";
    exit;
}

echo "Host is at IP $ip<br/>";

$email     = explode("@", $email);
$emailhost = $email[1];

if (!dns_get_mx($emailhost, $mxhostsarry)) {
    echo 'Email address is not at valid host';
    exit;
}

echo 'Email is delivered via :';
foreach ($mxhostsarry as $mx) {
    echo "$mx ";
}

echo "<br/>All submit details are ok.<br/>";
echo "Thank you for submitting your site.<br/>";
echo "It will be visited by one of our staff members soon";

?>
</body>
</html>
