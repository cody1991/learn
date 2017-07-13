<?php
$button_text = $_POST['text'];
$color = $_POST['color'];

// echo $button_text . "<br/>" . $color . "<br/>";

if (empty($button_text) || empty($color)) {
	echo 'Could not create image';
	exit;
}

$im = imagecreatefromjpeg($color . '-button.jpg');
$width_image = imagesx($im);
$height_image = imagesy($im);

$width_image_wo_margins = $width_image - (2 * 18);
$height_image_wo_margins = $height_image - (2 * 18);

$font_size = 33;
putenv('GDFONTPATH=C:\Windows\Fonts');
$fontname = 'arial';

do {
	$font_size--;

	$bbox = imagettfbbox($font_size, 0, $fontname, $button_text);
	$right_text = $bbox[2];
	$left_text = $bbox[0];
	$width_text = $right_text - $left_text;
	$height_text = abs($bbox[7] - $bbox[1]);
} while ($font_size > 8 && $height_text > $height_image_wo_margins || $width_text > $width_image_wo_margins);

if ($height_text > $height_image_wo_margins || $width_text > $width_image_wo_margins) {
	echo 'Text given will not fit on button.';
} else {
	$text_x = $width_image / 2.0 - $width_text / 2.0;
	$text_y = $height_image / 2.0 - $height_text / 2.0;
	if ($left_text < 0) {
		$text_x += abs($left_text);
	}

	$above_line_text = abs($bbox[7]);
	$text_y += $above_line_text;
	$text_y -= 2;
	$blue = imagecolorallocate($im, 0, 0, 64);
	imagettftext($im, $font_size, 0, $text_x, $text_y, $blue, $fontname, $button_text);
	Header('Content-type:image/jpeg');
	imagejpeg($im);
}

imagedestroy($im);

?>
