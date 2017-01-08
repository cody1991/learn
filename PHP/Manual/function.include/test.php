<?php 
// echo "A $color $fruit";

include 'vars.php';
echo "A $color $fruit";

function foo(){
  global $color;
include 'vars.php';

  echo "A $color $fruit";
}

foo();
?>
