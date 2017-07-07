<?php
$output = `ls -al`;
$output = explode("\n", $output);

foreach ($output as $key => $value) {
	if (strpos($value, ".php") != false) {
		$link = explode(" ", $value);
		$link = $link[count($link) - 1];

		echo "<div><a href='$link'>$link</a></div>";
	}
}
?>