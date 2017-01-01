<?php 
	$dom = simplexml_load_file("lectures.xml");
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<ul>
	<?php
	// print('<pre>');
	// print_r($dom);
	// print('</pre>');

	foreach($dom->lecture as $lecture){
		print("<li>");
		print($lecture["number"]);
		print(": ");
		print($lecture->title);
		print("<ul>");
		foreach($lecture->resources->resource as $resource ){
			print("<li>");
			print($resource['name']);
			print(": ");
			foreach($resource->format as $format){
				// 双引号的变量才会执行
				$path = $format["path"];
				print("<a href='$path'>");
				print($format['label']);
				print("</a>");
				print(" | ");
			}
			print("</li>");
		}
		print("</ul>");
		print("</li>");
		print("<hr/>");		
	}
	?>
	</ul>
</body>
</html>