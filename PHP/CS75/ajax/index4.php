<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<form  method="get" id="form">
		Symbol:
		<input value="aapl" type="text" id="symbol" name="symbol">
		<br>
		<input type="submit" value="Quote">
	</form>
	<script>
		var xhr;

		function quote(){
			try{
				xhr = new XMLHttpRequest();
			}catch(e){
				console.log(e);
				xhr = new ActiveXObject('Microsoft.XMLHTTP');
			}
			if(xhr==null){
				alert('Ajax not supported by your browser!');
				return;
			}

			var url = 'quote4.php?symbol='+document.getElementById('symbol').value;

			xhr.onreadystatechange = handler;
			// true 异步
			xhr.open('GET',url,true);
			xhr.send(null);
		}

		function handler(){
			// 完全载入
			if(xhr.readyState==0){
				console.log('unitialized');
			}
			if(xhr.readyState==1){
				console.log('open');
			}
			if(xhr.readyState==2){
				console.log('sent');
			}
			if(xhr.readyState==3){
				console.log('receiving');
			}


			if(xhr.readyState==4){
				if(xhr.status==200){
					console.log(xhr.responseText);
					var data = JSON.parse(xhr.responseText);

					console.log(data)

					console.log(xhr.getAllResponseHeaders());
					console.log(xhr.getAllResponseHeaders());
					console.log(xhr.getAllResponseHeaders());
					console.log(xhr.getAllResponseHeaders());
					console.log(xhr.getAllResponseHeaders());
					console.log(xhr.getAllResponseHeaders());
				}else{
					console.log('Error with ajax call!');
				}
			}
		}

		var form = document.getElementById('form');
		form.onsubmit = function(){
			quote();
			return false;			
		};
	</script>
</body>
</html>