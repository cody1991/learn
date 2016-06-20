<?php
$height = 200;
$width  = 200;

$im = imagecreatetruecolor($width, $height);
// 创建一个空白的
// 或者
// imagecreatefrompng(filename);
// imagecreatefromjpeg(filename);
// imagecreatefromgif(filename)

$white = imagecolorallocate($im, 255, 255, 255);
$blue  = imagecolorallocate($im, 0, 0, 64);

imagefill($im, 0, 0, $blue);
imageline($im, 0, 0, $width, $height, $white);
imagestring($im, 4, 50, 150, 'Sales', $white);

Header('Content-type:image/png');
imagepng($im);

imagedestroy($im);
