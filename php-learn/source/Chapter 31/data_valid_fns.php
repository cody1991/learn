<?php

function filled_out($form_vars) {
  // test that each variable has a value
  foreach ($form_vars as $key => $value)   {
     if (!isset($key) || ($value == '')) {
        echo $key."blank";
        return false;
     }
  }
  return true;
}

?>
