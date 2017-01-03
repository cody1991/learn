	$handler = @fopen("http://download.finance.yahoo.com/d/quotes.csv?s={$_GET['symbol']}&f=elll",'r');

	if($handler !== FALSE){
		$data = fgetcsv($handle);
		if($data !== FALSE && $data[0] =='N/A'){
			print($data[1]);
		}
		fclose($handle);
	}
---

	abort()

	getAllResponseHeaders()

	getResponseHeader(header)

	open(method,url)

	open(method,url,async)

	open(method,url,async,user)

	open(method,url,async,user,password)

	send()

	send(data)

	setRequestHeader(header,value)