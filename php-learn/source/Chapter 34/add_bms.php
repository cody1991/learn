<?php
 require_once('bookmark_fns.php');
 session_start();

 //create short variable name
 $new_url = $_POST['new_url'];

 //check that form has been completed
 if (!filled_out($_POST)) {
   //has not
   echo "<p class=\"warn\">Form not completely filled out.</p>";
 } else {
    // has; check and fix URL format if necessary
    if (strstr($new_url, 'http://') === false) {
       $new_url = 'http://'.$new_url;
    }

    // continue on to check URL is valid
    if (!(@fopen($new_url, 'r'))) {
      echo "<p class=\"warn\">Not a valid URL.</p>";
    } else {
      //it is valid, so continue to add it
      add_bm($new_url);
    }
 }
 // regardless of the status of the current request
 // get the bookmarks this user has already saved
 if ($url_array = get_user_urls($_SESSION['valid_user'])) {
    display_user_urls($url_array);
 }
?>
