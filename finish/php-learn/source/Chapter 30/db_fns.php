<?php

function db_connect() {
   $result = new mysqli('localhost', 'mail', 'password', 'mail');
   if (!$result) {
      return false;
   }
   return $result;
}

?>
