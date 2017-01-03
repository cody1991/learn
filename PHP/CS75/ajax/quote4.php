<?php 

	class Stock{
		public $price;
	}

	$stock = new Stock();
	
	// json_encode($value)
	header('Content-type: application/json');

	$handler = @fopen("http://download.finance.yahoo.com/d/quotes.csv?s={$_GET['symbol']}&f=elll",'r');

	$price = 0;

	if($handler !== FALSE){
		$data = fgetcsv($handler);

		// print_r($data);

		if($data !== FALSE && $data[0] !='N/A'){
			
			if( is_numeric($data[0])){
				$stock->price = $data[0];
			}
		}
		fclose($handler);
	}

	print(json_encode($stock));

?>