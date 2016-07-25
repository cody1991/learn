<?php

function foo() {
  throw new Exception('here it is');
  return;
}

try {
  foo();
}
catch (Exception $e) {
  echo 'caught exception';
}

?>
