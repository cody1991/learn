<?php
$button_text = "Press";
$color       = "Red";

$im = imagecreatefrompng('./btn.png');

$width_image  = imagesx($im);
$height_image = imagesy($im);

$width_image_wo_margins  = $width_image - (2 * 18);
$height_image_wo_margins = $height_image - (2 * 18);

$font_size = 33;
// putenv('GDFONTPATH=c:\Windows\Fonts');

$fontname = 'c:\Windows\Fonts\Arial.ttf';

do {
    $font_size--;

    $bbox       = imagettfbbox($font_size, 0, $fontname, $button_text);
    $right_text = $bbox[2];
    $left_text  = $bbox[0];

    $width_text  = $right_text - $left_text;
    $height_text = abs($bbox[7] - $bbox[1]);
} while ($font_size > 8 && ($height_text > $height_image_wo_margins || $width_text > $width_image_wo_margins));

if ($height_text > $height_image_wo_margins || $width_text > $width_image_wo_margins) {
    echo 'Text given will not fit on button';
} else {
    $text_x = $width_image / 2.0 - $width_text / 2.0;
    $text_y = $height_image / 2.0 - $height_text / 2.0;

    if ($left_text < 0) {
        $text_x += abs($left_text);
    }
    $above_line_text = abs($bbox[7]);
    $text_y += $above_line_text;
    $text_y -= 2;

    $white = imagecolorallocate($im, 255, 255, 255);

    imagettftext($im, $font_size, 0, $text_x, $text_y, $white, $fontname, $button_text);

    Header('Content-type:image/png');
    imagepng($im);
}

imagedestroy($im);
