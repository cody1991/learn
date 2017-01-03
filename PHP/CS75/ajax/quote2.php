<?php 
	
	sleep(5);

	$handler = @fopen("http://download.finance.yahoo.com/d/quotes.csv?s={$_GET['symbol']}&f=elll",'r');

	if($handler !== FALSE){
		$data = fgetcsv($handler);

		print_r($data);

		if($data !== FALSE && $data[0] !='N/A'){
			print($data[0]);
		}
		fclose($handler);
	}

?>