<?php
  // this functionality is in a separate file to allow us to be
  // more paranoid with it

  // if anything goes wrong, we will exit

  $max_size = 50000;

  include ('include_fns.php');
  session_start();

  // only admin users can upload files
  if(!check_admin_user())  {
    echo "<p>You do not seem to be authorized to use this page.</p>";
    exit;
  }

  // set up the admin toolbar buttons
  $buttons = array();
  $buttons[0] = 'change-password';
  $buttons[1] = 'create-list';
  $buttons[2] = 'create-mail';
  $buttons[3] = 'view-mail';
  $buttons[4] = 'log-out';
  $buttons[5] = 'show-all-lists';
  $buttons[6] = 'show-my-lists';
  $buttons[7] = 'show-other-lists';

  do_html_header('Pyramid-MLM - Upload Files');

  display_toolbar($buttons);

  // check that the page is being called with the required data
  if((!$_FILES['userfile']['name'][0]) ||
     (!$_FILES['userfile']['name'][1]) ||
     (!$_POST['subject']||!$_POST['list'])) {
      echo "<p>Problem: You did not fill out the form fully.
            The images are the only optional fields.
            Each message needs a subject, text version
            and an HTML version.</p>";
      do_html_footer();
      exit;
  }

  $list = $_POST['list'];
  $subject = $_POST['subject'];

  if(!($conn=db_connect())) {
     echo "<p>Could not connect to db.</p>";
     do_html_footer();
     exit;
  }

  // add mail details to the DB
  $query = "insert into mail values (NULL,
                     '".$_SESSION['admin_user']."',
                     '".$subject."',
                     '".$list."',
                     'STORED', NULL, NULL)";

  $result = $conn->query($query);
  if(!$result) {
    do_html_footer();
    exit;
  }

  //get the id MySQL assigned to this mail
  $mailid = $conn->insert_id;

  if(!$mailid) {
    do_html_footer();
    exit;
  }

  // creating directory will fail if this is not the first message archived
  // that's ok
  @mkdir('archive/'.$list, 0700);

  // it is a problem if creating the specific directory for this mail fails
  if(!mkdir('archive/'.$list.'/'.$mailid, 0700)) {
    do_html_footer();
    exit;
  }

  // iterate through the array of uploaded files
  $i = 0;
  while (($_FILES['userfile']['name'][$i]) &&
         ($_FILES['userfile']['name'][$i] !='none')) {
    echo "<p>Uploading ".$_FILES['userfile']['name'][$i]." - ".
          $_FILES['userfile']['size'][$i]." bytes.</p>";

    if ($_FILES['userfile']['size'][$i]==0) {
      echo "<p>Problem: ".$_FILES['userfile']['name'][$i].
           " is zero length";
      $i++;
      continue;
    }

    if ($_FILES['userfile']['size'][$i]>$max_size) {
      echo "<p>Problem: ".$_FILES['userfile']['name'][$i]." is over "
            .$max_size." bytes";
      $i++;
      continue;
    }

    // we would like to check that the uploaded image is an image
    // if getimagesize() can work out its size, it probably is.
    if(($i>1) && (!getimagesize($_FILES['userfile']['tmp_name'][$i]))) {
      echo "<p>Problem: ".$_FILES['userfile']['name'][$i].
           " is corrupt, or not a gif, jpeg or png.</p>";
      $i++;
      continue;
    }

    // file 0 (the text message) and file 1 (the html message) are special cases
    if($i==0) {
      $destination = "archive/".$list."/".$mailid."/text.txt";
    } else if($i == 1) {
      $destination = "archive/".$list."/".$mailid."/index.html";
    } else  {
      $destination = "archive/".$list."/".$mailid."/"
                     .$_FILES['userfile']['name'][$i];
      $query = "insert into images values ('".$mailid."',
                       '".$_FILES['userfile']['name'][$i]."',
                       '".$_FILES['userfile']['type'][$i]."')";

      $result = $conn->query($query);
    }

    if (!is_uploaded_file($_FILES['userfile']['tmp_name'][$i])) {
      // possible file upload attack detected
      echo "<p>Something funny happening with "
           .$_FILES['userfile']['name'].", not uploading.";
      do_html_footer();
      exit;
    }

    move_uploaded_file($_FILES['userfile']['tmp_name'][$i],
                       $destination);

    $i++;
  }

  display_preview_button($list, $mailid, 'preview-html');
  display_preview_button($list, $mailid, 'preview-text');
  display_button('send', "&id=$mailid");

  echo "<p style=\"padding-bottom: 50px\">&nbsp;</p>";
  do_html_footer();
?>
