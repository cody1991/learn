<?php
$vote = $_REQUEST['vote'];

if (!$db_conn = new mysqli('localhost', 'poll', 'poll', 'poll')) {
    echo 'Could not connect to db<br/>';
    exit;
}

if (!empty($vote)) {
    $vote  = addslashes($vote);
    $query = "update poll_results
        set num_votes = num_votes + 1
        where candidate = '$vote'
    ";

    if (!($result = @$db_conn->query($query))) {
        echo 'Could not connect to db<br/>';
        exit;
    }
}

$query = 'select * from poll_results';

if (!($result = @$db_conn->query($query))) {
    echo 'Could not connect to db<br/>';
    exit;
}

$num_candidates = $result->num_rows;
$total_votes    = 0;

while ($row = $result->fetch_object()) {
    $total_votes += $row->num_votes;
}

$result->data_seek(0); // 重置指针的位置

// graph

$fontname = 'c:\Windows\Fonts\Arial.ttf';

$width        = "500";
$left_margin  = 50;
$right_margin = 50;
$bar_height   = 40;
$bar_spacing  = $bar_height / 2;
$title_size   = 16;
$main_size    = 12;
$small_size   = 12;
$text_indent  = 10;

$x        = $left_margin + 60;
$y        = 50;
$bar_unit = ($width - ($x + $right_margin)) / 100;
$height   = $num_candidates * ($bar_height + $bar_spacing) + 50;

$im    = imagecreatetruecolor($width, $height);
$white = imagecolorallocate($im, 255, 255, 255);
$blue  = imagecolorallocate($im, 0, 64, 128);
$black = imagecolorallocate($im, 0, 0, 0);
$pink  = imagecolorallocate($im, 255, 78, 243);

$text_color    = $black;
$percent_color = $black;
$bg_color      = $white;
$line_color    = $blue;
$bar_color     = $blue;
$number_color  = $pink;

imagefilledrectangle($im, 0, 0, $width, $height, $bg_color);

imagerectangle($im, 0, 0, $width - 1, $height - 1, $line_color);

$title            = 'Poll Result';
$title_dimensions = imagettfbbox($title_size, 0, $fontname, $title);
$title_length     = $title_dimensions[2] - $title_dimensions[0];
$title_hegiht     = abs($title_dimensions[7] - $title_dimensions[1]);
$title_above_line = abs($title_dimensions[7]);
$title_x          = ($width - $title_length) / 2;
$title_y          = ($y - $title_hegiht) / 2 + $title_above_line;
imagettftext($im, $title_size, 0, $title_x, $title_y, $text_color, $fontname, $title);

imageline($im, $x, $y - 5, $x, $height - 15, $line_color);

while ($row = $result->fetch_object()) {
    if ($total_votes > 0) {
        $percent = intval(($row->num_votes / $total_votes) * 100);
    } else {
        $percent = 0;
    }

    $percent_dimensions = imagettfbbox($main_size, 0, $fontname, $percent . '%');
    $percent_length     = $percent_dimensions[2] - $percent_dimensions[0];
    imagettftext($im, $main_size, 0, $width - $percent_length - $text_indent, $y + ($bar_height / 2), $percent_color, $fontname, $percent . '%');

    $bar_length = $x + ($percent * $bar_unit);

    imagefilledrectangle($im, $x, $y - 2, $bar_length, $y + $bar_height, $bar_color);

    imagettftext($im, $main_size, 0, $text_indent, $y + ($bar_height / 2), $text_color, $fontname, "$row->candidate");

    imagettftext($im, $small_size, 0, $x + (100 * $bar_unit) - 50, $y + ($bar_height / 2), $number_color, $fontname, $row->num_votes . '/' . $total_votes);

    $y = $y + ($bar_height + $bar_spacing);
}

Header('Content-type:image/png');
imagepng($im);
imagedestroy($im);
