<?php
$host = 'ftp.cs.rmit.edu.au';
$user = 'anonymous';
$password = 'me@example.com';
$remotefile = '/pub/tsg/teraterm/ttssh14.zip';
$localfile = '/tmp/writable/ttssh14.zip';

$conn = ftp_connect($host);

if (!$conn) {
	echo "error: Could not connect to ftp server<br/>";
	exit;
}
?>
