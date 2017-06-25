<?php
$isTrue = true;
if ($isTrue == true):
?>

<p>is true</p>

<?php else: ?>

not true

<?php endif;?>

<?php
var_dump($isTrue);
echo is_int($isTrue);
echo gettype($isTrue);

var_dump((bool) 0);
var_dump((bool) 0.0);
var_dump((bool) 0.00);
?>
