<?php 
	$completeurl = "http://rss.nytimes.com/services/xml/rss/nyt/internet.xml";
	$completeurl = "internet.xml";
	// $dom = simplexml_load_file('lectures.xml');
	$dom = simplexml_load_file($completeurl);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<ul>
		<?php foreach($dom->channel->item as $item): ?>
			<li>
				<a href=" <?= $item->link ?> ">
					<?= htmlspecialchars($item->title) ?>
				</a>
			</li>
		<?php endforeach ?>
	</ul>
</body>
</html>