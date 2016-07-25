<?php

class DBException extends Exception {
  function display() {
    echo "DBException: ".$this->message;
  }
}

?>
