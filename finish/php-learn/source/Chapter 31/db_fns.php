<?php

// connect to the mlm database
function db_connect() {
   $result = new mysqli('localhost', 'mlm', 'password', 'mlm');
   if (!$result) {
      return false;
   }
   return $result;
}

?>
