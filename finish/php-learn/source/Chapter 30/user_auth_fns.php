<?php
function login($username, $password) {
// check username and password with db
// if yes, return true
// else return false

  // connect to db
  $conn = db_connect();

  if (!$conn) {
    return false;
  }

  $result = $conn->query("select * from users
                         where username='".$username."'
                         and password = sha1('".$password."')");

  if (!$result) {
     return false;
  }

  if ($result->num_rows>0) {
     return true;
  } else {
     return false;
  }
}

function check_auth_user() {
// see if somebody is logged in and notify them if not

  if (isset($_SESSION['auth_user'])) {
    return true;
  } else {
    return false;
  }
}

?>
