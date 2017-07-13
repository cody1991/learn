<?php

// echo date('jS F Y') . "<br/>";

// $timestamp = time();
// echo $timestamp . "<br/>";
// $timestamp = date("U");
// echo $timestamp . "<br/>";

// print_r(getdate());

$height = 200;
$width = 200;
$im = imagecreatetruecolor($width, $height);
$white = imagecolorallocate($im, 255, 255, 255);
$blue = imagecolorallocate($im, 0, 0, 64);

imagefill($im, 0, 0, $blue);
imageline($im, 0, 0, $width, $height, $white);
imagestring($im, 4, 50, 150, "Sales", $white);
Header("Content-type:image/png");
imagepng($im);

imagedestroy($im);
?>
