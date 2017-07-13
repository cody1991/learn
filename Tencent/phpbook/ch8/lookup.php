<?php
$symbol = 'AMZN';
$url = 'http://finance.yahoo.com/d/quotes.csv' . '?s=' . $symbol . '&e=.csv&f=sl1d1t1c1ohgv';

// if (!($contents = file_get_contents($url))) {
// 	die('Failure to open ' . $url);
// }

// $ch = curl_init();
// curl_setopt($ch, CURLOPT_URL, $url);
// curl_setopt($ch, CURLOPT_HEADER, 1);
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// $data = curl_exec($ch);
// curl_close($ch);
// print_r($data);
// list($symbol, $quote, $date, $time) = explode(',', $contents);
?>
