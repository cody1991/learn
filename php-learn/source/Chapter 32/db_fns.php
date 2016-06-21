<?php

function db_connect() {
   $result = new mysqli('localhost', 'discussion', 'password', 'discussion');
   if (!$result) {
      return false;
   }
   return $result;
}

?>
