<?php
function login($email, $password) {
// check username and password with db
// if yes, return login type
// else return false

  // connect to db
  $conn = db_connect();
  if (!$conn) {
    return 0;
  }

  $query = "select admin from subscribers
                         where email='".$email."'
                         and password = sha1('".$password."')";

  $result = $conn->query($query);
  if (!$result) {
    return false;
  }

  if ($result->num_rows<1) {
    return false;
  }

  $row = $result->fetch_array();

  if($row[0] == 1) {
    return 'admin';
  } else {
    return 'normal';
  }
}

function check_logged_in() {
  return ( check_normal_user() || check_admin_user() );
}

function get_email() {
  if (isset($_SESSION['normal_user'])) {
    return $_SESSION['normal_user'];
  }

  if (isset($_SESSION['admin_user'])) {
    return $_SESSION['admin_user'];
  }

  return false;
}

function change_password($email, $old_password, $new_password,
                         $new_password_conf) {
// change password for email/old_password to new_password
// return true or false


  // if the old password is right
  // change their password to new_password and return true
  // else return false
  if (login($email, $old_password)) {
    if($new_password==$new_password_conf)  {
      if (!($conn = db_connect())) {
        return false;
      }

      $query = "update subscribers
               set password = sha1('".$new_password."')
               where email = '".$email."'";

      $result = $conn->query($query);
      return $result;
    }  else {
      echo "<p>Your passwords do not match.</p>";
    }
  } else {
    echo "<p>Your old password is incorrect.</p>";
  }

  return false; // old password was wrong
}



function check_normal_user() {
// see if somebody is logged in and notify them if not

  if (isset($_SESSION['normal_user'])) {
    return true;
  } else {
    return false;
  }
}

function check_admin_user() {
// see if somebody is logged in and notify them if not
  if (isset($_SESSION['admin_user'])) {
    return true;
  } else {
    return false;
  }
}
?>
