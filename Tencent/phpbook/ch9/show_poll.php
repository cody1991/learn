<?php
$vote = $_POST['vote'];

if (!$db_conn = new mysqli('localhost', 'cody1991', 'cody1991', 'poll')) {
	echo 'Could not connect to db';
	exit;
}

if (!empty($vote)) {
	$vote = addslashes($vote);
	$query = "update poll_results set num_votes = num_votes + 1 where candidate = '$vote'";

	if (!($result = @$db_conn->query($query))) {
		echo 'Could not connect to db</br>';
		exit;
	}

	$query = 'select * from poll_results';
	if (!($result = @$db_conn->query($query))) {
		echo 'Could not connect to db<br/>';
		exit;
	}

	$num_candidates = $result->num_rows;
	$total_votes = 0;
	while ($row = $result->fetch_object()) {
		$total_votes += $row->num_votes;
	}

	// reset result pointer
	$result->data_seek(0);

	// print($total_votes);

	$width = 500;
	$left_margin = 50;
	$right_margin = 50;
	$bar_height = 40;
	$bar_spacing = $bar_height / 2;
	$font = "arial";
	$title_size = 16;
	$main_size = 12;
	$small_size = 12;
	$text_indent = 10;

	$x = $left_margin + 60;
	$y = 50;
	$bar_unit = ($width - ($x + $right_margin)) / 100;
	$height = $num_candidates * ($bar_height + $bar_spacing) + 50;

	$im = imagecreatetruecolor($width, $height);
	$white = imagecolorallocate($im, 255, 255, 255);
	$blue = imagecolorallocate($im, 0, 64, 128);
	$black = imagecolorallocate($im, 0, 0, 0);
	$pink = imagecolorallocate($im, 255, 78, 243);

	$text_color = $black;
	$percent_color = $black;
	$bg_color = $white;
	$line_color = $black;
	$bar_color = $blue;
	$number_color = $pink;

	imagefilledrectangle($im, 0, 0, $width - 1, $height - 1, $line_color);

	$title = 'cody';
	$title_dimensions = imagettfbbox($title_size, 0, $font, $title);
	$title_length = $title_dimensions[2] - $title_dimensions[0];
	$title_height = abs($title_dimensions[7] - $title_dimensions[1]);
	$title_above_line = abs($title_dimensions[7]);
	$title_x = ($width - $title_length) / 2;
	$title_y = ($y - $title_height) / 2 + $title_above_line;
	imagettftext($im, $title_size, 0, $title_x, $title_y, $text_color, $font, $title);
}
?>
