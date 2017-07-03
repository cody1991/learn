<?php
$cody = "\"Cody learn php";

$feedback = addslashes($cody);

echo $feedback;

$feedback = stripcslashes($feedback);

echo $feedback;

echo get_magic_quotes_gpc()
?>
