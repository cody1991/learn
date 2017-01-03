<?php
header('Content-type:text/xml');

	print("<quote symbol='{$_GET['symbol']}'>");

	$handler = @fopen("http://download.finance.yahoo.com/d/quotes.csv?s={$_GET['symbol']}&f=elll",'r');

	if($handler !== FALSE){
		$data = fgetcsv($handler);

		if($data !== FALSE && $data[0] !='N/A'){
			print("<price>{$data[0]}</price>");
		}
		fclose($handler);
	}

	print("</quote>");

?>