<?php
require '2.php';
$homepage = new Page();

$homepage->content = "<p>HomePage</p>";

$homepage->display();

$class = new ReflectionClass("Page");
echo "<pre>" . $class . "</pre>";
?>
