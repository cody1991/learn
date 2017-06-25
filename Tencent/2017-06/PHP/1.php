<?php
print_r($_SERVER['HTTP_USER_AGENT']);
print_r($_SERVER);

print_r(htmlspecialchars("<script>alert('1');</script>"));

$user_agent = $_SERVER['HTTP_USER_AGENT'];

if (strpos($user_agent, 'Mac') !== false) {
	echo '正在使用高大上的Mac';
}
?>
