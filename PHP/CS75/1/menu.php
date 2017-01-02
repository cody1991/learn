<?php 
	$dom = simplexml_load_file('menu.xml');
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php print('<pre>'); ?>
	<?php 
	// print_r($dom); 
	?>
	<?php print('</pre>'); ?>
	<ul>
		<?php foreach($dom->item as $item): ?>
			<?php if($item['id']=="mush"): ?>
				<li>
					<?=$item['id']?> : <?= $item->name ?>
				</li>
			<?php endif ?>
		<?php endforeach ?>

		<?php 
			// $result = $dom->xpath("/child::menu/child::item[@id='mush']");
		  // 默认是child

			// // 两个表示任意DOM下

			$result = $dom->xpath("/menu/item[@id='mush']");
			print_r($result);
			echo '<br/>';
			echo $result[0]['id'];
			echo " : ";
			echo $result[0]->name;
			// if(count($results))

			echo '<hr>';
			$result = $dom->xpath("/menu/item");
			print_r($result);

			echo '<hr>';
			$result = $dom->xpath("/menu/item/name");
			print_r($result);
		?>
	</ul>
</body>
</html>