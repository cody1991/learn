<?php
// set for 600x800 screen
$table_width='760';

function do_html_header($title='') {
  // print an HTML header

  global $table_width;

  //draw title bar
?>
  <html>
  <head>
    <title><?php echo $title?></title>
    <style>
      h1 { font-family: Arial,  Helvetica, sans-serif; font-size: 32;
           font-weight: bold; color:  white; margin-bottom: 0}
      h2 { margin-bottom: 0}
      b { font-family: Arial, Helvetica, sans-serif; font-size: 14;
          font-weight: bold; color: black }
      th { font-family: Arial,  Helvetica, sans-serif; font-size: 18
           font-weight: bold; color:  white; }
      body, li, td, p { font-family: Arial, Helvetica, sans-serif;
                     font-size: 14; margin=5px }
      a { color: #000000 }
    </style>
  </head>
  <body>
  <table width="<?php echo $table_width; ?>" cellspacing="0" cellpadding="6" border="0">
  <tr>
  <td bgcolor="#5B69A6" width="73">
      <img src="images/pyramid.gif" width="73" height="49" alt="" valign="middle" />
  </td>
  <td bgcolor="#5B69A6" width="<?php echo ($table_width - 73);?>">
      <h1><?php echo $title?></h1>
  </td>
  </tr>
  </table>
  <table width="<?php echo $table_width; ?>" cellpadding="0" cellspacing="0" border="0">
  <tr><td>
<?php
}

function do_html_footer() {
  // print an HTML footer
  global $table_width;
?>
  </td></tr>
  </table>
  <table width="<?php echo $table_width; ?>" cellspacing="0" cellpadding="6" border="0">
  <tr>
  <td bgcolor="#5B69A6" align="right">
      <img src="images/pyramid.gif" width="73" height="49" alt="" valign="middle" />
  </td>
  </tr>
  </table>
  </body>
  </html>
<?php
}

// Print a flexible list of items and optional action buttons for each
// This function is a bit of a mess to read
// $title is the heading
// $list is the array of items to list
//  - $list[x][0] -item id
//  - $list[x][1] -item name
//  - $list[x][2] -parent name (optional)
//  - $list[x][3] -parent id (optional)
// action1, 2, and 3 are the optional actions for up to three buttons per item

function display_items($title, $list, $action1='', $action2='', $action3='') {
  global $table_width;
  echo "<table width=\"$table_width\" cellspacing=\"0\" cellpadding=\"0\"
         border=\"0\">";

  // count number of actions
  $actions=(($action1!='') + ($action2!='') + ($action3!=''));

  echo "<tr>
        <th colspan=\"".(1+$actions)."\" bgcolor=\"#5B69A6\">".$title."</th>
        </tr>";

  // count number of items
  $items=sizeof($list);

  if($items == 0) {
    echo "<tr>
          <td colspan=\"".(1+$actions)."\" align=\"center\">No Items to Display</td>
          </tr>";
  } else  {
    // print each row
    for($i=0; $i<$items; $i++) {
      if($i%2) {
      	// background colors alternate
        $bgcolor="#ffffff";
      } else {
        $bgcolor="#ccccff";
      }

      echo "<tr>
            <td bgcolor=\"".$bgcolor."\"
             width=\"".($table_width - ($actions * 149))."\">";

      echo $list[$i][1];

      if ($list[$i][2]) {
        echo " - ".$list[$i][2];
      }

      echo "</td>";

      // create buttons for up to three actions per line
      for($j=1; $j<=3; $j++) {
        $var="action".$j;

        if($$var) {
          echo "<td bgcolor=\"".$bgcolor."\" width=\"149\">";
          // view/preview buttons are a special case as they link to a file
          if(($$var == 'preview-html') || ($$var == 'view-html') ||
             ($$var == 'preview-text') || ($$var == 'view-text')) {
            display_preview_button($list[$i][3], $list[$i][0], $$var);
          } else {
            display_button($$var, '&id=' . $list[$i][0] );
          }
          echo "</td>";
        }
      }
      echo "</tr>\n";
    }
    echo "</table>";
  }
}

// diplay stored information about each list
function display_information($listid) {
  if(!$listid) {
    return false;
  }

  $info=load_list_info($listid);

  if($info) {
    echo "<h2>".pretty($info[listname])."</h2>
          <p>".pretty($info[blurb])."
          </p><p>Number of subscribers:".$info[subscribers]."
          </p><p>Number of messages in archive:". $info[archive]."</p>";
  }
}

// display form to gather new account data or change existing account data
function display_account_form($email='', $realname='', $mimetype='') {
  if($realname) {
    $title=$realname;
  } else {
    $title="New Account";
  }
?>
  <div align="center">
  <form method="post" action="index.php?action=store-account">
  <table bgcolor="#cccccc" cellpadding="6" cellspacing="0" border="0">
   <tr>
     <th colspan="2" bgcolor="#5B69A6"><?php echo $title; ?></th>
   </tr>
   <tr>
     <td>Real Name:</td>
     <td><input type="text" name="realname" size="40" maxlength="100"
          value="<?php echo $realname; ?>"/></td>
   </tr>
   <tr>
     <td>Email Address:</td>
     <td><input type="text" name="email" size="40" maxlength="100"
          value="<?php echo $email; ?>"/></td>
   </tr>
   <tr>
     <td>Requested Email Format:</td>
     <?php
       echo "<td><select name=\"mimetype\"><option value=\"T\"";
       if ($mimetype == 'T') {
          echo " selected";
       }

       echo ">Text Only</option><option value=\"H\"";
       if ($mimetype == 'H') {
          echo " selected";
       }
       echo ">HTML</option></select></td>";
     ?>
   </tr>

   <?php
   //only request password if not logged in to an existing account
    if ((!isset($_SESSION['admin_user'])) && (!isset($_SESSION['normal_user']))) {
       echo "<tr>
             <td>Password:</td>
             <td><input type=\"password\" name=\"new_password\" size=\"20\"
             maxlength=\"16\" value=\"\" /></td>
             </tr>";
    }
   ?>

   <tr>
   <td colspan=\"2\" align=\"center\">
   <?php display_form_button('save-changes'); ?>
   </td></form>
   </tr>
 </table>
 </div>
 <br />
<?php
}

function display_login_form($action) {
  // display form asking for email and password
?>
  <div align="center">
  <form method="post" action="index.php?action=<?php echo $action; ?>">
  <table bgcolor="#cccccc" border="0" cellpadding="6" cellspacing="0">
   <tr>
     <th colspan="2" bgcolor="#5B69A6">Please Log In</th>
   </tr>
   <tr>
     <td>Email Address:</td>
     <td><input type="text" name="email" size="20"></td></tr>
   <tr>
     <td>Password:</td>
     <td><input type="password" name="password" size="20"></td></tr>
   <tr>
     <td colspan="2" align="center">
     <?php display_form_button('log-in'); ?>
     </td></tr>
   <tr>
 </table></form>
 </div>
<?php
}


function display_form_button($button) {
  //display one of our standard buttons in a form
  echo "<div align=\"center\">
        <input type=\"image\" src=\"images/".$button.".gif\"
        border=\"0\" width=\"149\" height=\"43\"
        alt=\"".format_action($button)."\" /></a>
        </div>";
}

function display_button($button, $extra_parameters='') {
  //display one of our standard buttons as a href
  $url="index.php?action=$button";
  if($extra_parameters) {
    $url .= $extra_parameters;
  }

  echo "<div align=\"center\"><a href=\"".$url."\">
        <img src=\"images/".$button.".gif\" border=\"0\"
        width=\"149\" height=\"43\"
        alt=\"".format_action($button)."\"/></a></div>";
}


function display_preview_button($list, $mail, $button) {
  if (($button == 'view-html') || ($button== 'preview-html')) {
    echo "<div align=\"center\">
          <a href=\"archive/".$list."/".$mail."/index.html\"
          target=\"new\"><img src=\"images/".$button.".gif\"
          width=\"149\" height=\"43\" border=\"0\"
          alt=\"".format_action($button)."\" /></a></div>\n";
  } else {
    echo "<div align=\"center\">
          <a href=\"archive/".$list."/".$mail."/text.txt\"
          target=\"new\"><img src=\"images/".$button.".gif\"
          width=\"149\" height=\"43\" border=\"0\"
          alt=\"".format_action($button)."\" /></a></div>\n";
  }
}

function display_spacer() {
  //display blank spacer the size of our buttons
  echo "<img src=\"images/spacer.gif\" border=\"0\"
        width=\"149\" height=\"43\" alt=\"\"/>";
}

function format_action($string) {
  // convert our actions into a displayable string
  // eg "account-setup" becomes "Account Setup"
  $string=str_replace('-', ' ', $string);
  $string=ucwords($string);
  return $string;
}

function display_toolbar($button, $extra_parameters='') {
  // draw our toolbar
  // there are up to five buttons per row and up to three rows
  // these numbers are completely arbitary and depend on the
  // images size and acceptable screen width

  global $table_width;

  echo "<table width=\"".$table_width."\"
         cellpadding=\"0\" cellspacing=\"0\" border=\"0\">";

  for($i=0; $i < 3; $i++) {

    if($button[($i*5)]) {
      echo "<tr>
            <td bgcolor=\"#cccccc\">";

      for($j=0; $j < 5; $j++) {
        echo "<td bgcolor=\"#cccccc\">";
        if ($button[($i*5+$j)]) {
          display_button($button[$i*5+$j], $extra_parameters);
        } else {
          display_spacer();
        }
        echo "</td>";
      }
      echo "</tr>";
    }
  }
  echo "</table>";
}

function pretty($string) {
  //prepare a text message for tidy display as HTML

  $string=trim($string);
  $string=htmlspecialchars($string);
  $string=nl2br($string);
  $string=stripslashes($string);

  return $string;
}

function pretty_all($array) {
  //prepare an array of text messages for tidy display as HTML
  foreach ($array as $key => $val) {
    $array[$key]=pretty($val);
  }
  return $array;
}

function display_mail_form($email, $listid=0) {
  // display html form for uploading a new message
  global $table_width;
  $list=get_all_lists();
  $lists=sizeof($list);
?>
  <table cellpadding="4" cellspacing="0" border="0"
     width="<?php echo $table_width; ?>">
  <form enctype="multipart/form-data" action="upload.php" method="post">
  <tr>
    <td bgcolor="#cccccc">List:</td>
    <td bgcolor="#cccccc">
      <select name="list">
      <?php
      for($i=0; $i<$lists; $i++) {
        echo "<option value=\"".$list[$i][0]."\"";

        if ($listid== $list[$i][0]) {
           echo " selected";
        }

        echo ">".$list[$i][1]."</option>\n";
      }
      ?>
      </select>
    </td>
  </tr>
  <tr>
    <td bgcolor="#cccccc">Subject:</td>
    <td bgcolor="#cccccc">
      <input type="text" name="subject" value="<?php echo $subject; ?>"
       size="60" /></td>
  </tr>
  <tr>
    <td bgcolor="#cccccc">Text Version:</td>
    <td bgcolor="#cccccc">
       <input type="file" name="userfile[0]" size="60"/></td>
  </tr>
  <tr><td bgcolor="#cccccc">HTML Version:</td>
  <td bgcolor="#cccccc">
    <input type="file" name="userfile[1]" size="60" /></td>
  </tr>
  <tr><td bgcolor="#cccccc" colspan="2">Images: (optional)

<?php
  $max_images=10;
  for($i=0; $i<10; $i++) {
    echo "<tr><td bgcolor=\"#cccccc\">Image ".($i+1)." </td>
          <td bgcolor=\"#cccccc\"><input type=\"file\"
              name=\"userfile[".($i+2)."]\" size=\"60\"/></td>
          </tr>";
  }
?>
  <tr><td colspan="2" bgcolor="#cccccc" align="center">
  <input type="hidden" name="max_images" value="<?php echo $max_images; ?>">
  <input type="hidden" name="listid" value="<?php echo $listid; ?>">
  <?php display_form_button('upload-files'); ?>
  </td>
  </form>
  </tr>
  </table>
<?php
}

function display_password_form() {
// display html change password form
?>
   <br />
   <div align="center">
   <form action="index.php?action=store-change-password" method="post">
   <table cellpadding="2" cellspacing="0" bgcolor="#cccccc">
   <tr><th colspan="2" bgcolor="#5B69A6">Change Password</th></tr>
   <tr><td>Old password:</td>
       <td><input type="password" name="old_passwd" size="16" maxlength="16"/></td>
   </tr>
   <tr><td>New password:</td>
       <td><input type="password" name="new_passwd" size="16" maxlength="16"/></td>
   </tr>
   <tr><td>Repeat new password:</td>
       <td><input type="password" name="new_passwd2" size="16" maxlength="16"/></td>
   </tr>
   <tr><td colspan="2" align="center"><?php display_form_button('change-password'); ?>
   </td></tr>
   </table>
   </div>
   <br />
<?php
}

function display_list_form() {
// display html new list form
?>
   <br />
   <div align="center">
   <form action="index.php?action=store-list" method="post">
   <table cellpadding="2" cellspacing="0" bgcolor="#cccccc">
   <tr><th colspan="2" bgcolor="#5B69A6">Create New List</th></tr>
   <tr><td>List Name:</td>
       <td><input type="name" name="name" size="20" maxlength="20"/></td>
   </tr>
   <tr><td colspan="2">List Description:</td></tr>
   <tr><td colspan="2"><textarea rows="4" cols="72"
                        name="blurb"></textarea></td></tr>
   <tr><td colspan="2" align="center"><?php display_form_button('save-list'); ?>
   </td></tr>
   </table>
   </div>
   <br />
<?php
}

?>
