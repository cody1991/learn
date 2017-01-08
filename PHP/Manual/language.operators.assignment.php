<?php 
$a = 3;
$b = &$a;

print "<pre>";
print "$a\n";
print "$b\n";

$a = 4;
print "$a\n";
print "$b\n";

print "</pre>";
?>
