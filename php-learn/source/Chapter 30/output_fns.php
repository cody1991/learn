<?php
// set for 600x800 screen
$table_width = 760;

function do_html_header($auth_user, $title = '', $selected_account) {
  // print an HTML header including cute logo :)

  global $table_width;

  //draw title bar
?>
  <html>
  <head>
    <title><?php echo $title; ?></title>
    <style>
      h1 { font-family: 'Comic Sans MS',  sans-serif; font-size: 32;
           font-weight: bold; color:  black; margin-bottom: 0}
      b { font-family: 'Arial', sans-serif; font-size: 13;
          font-weight: bold; color: black }
      th { font-family: 'Comic Sans MS',  sans-serif; font-size: 18
           font-weight: bold; color:  black; }
      body, li, td { font-family: Arial, Helvetica, sans-serif;
                     font-size: 12; margin = 5px }
      a { color: #000000 }
    </style>
  </head>
  <body>
  <table width="<?php echo $table_width; ?>" cellspacing="0" cellpadding="3" bgcolor="#ff6600" border="0">
  <tr bgcolor="#ff6600">
  <td bgcolor="#ff6600" width="103"><img src="images/warm-mail.gif"
      width="103" height="45" alt="" valign="middle" /></td>
  <td bgcolor="#ff6600" width="<?php echo ($table_width-110);?>"><h1><?php echo $title;?></h1></td>
  <?php
  // include the account select box only if the user has more than one account
  if(number_of_accounts($auth_user)>1) {
    echo "<form action=\"index.php?action=open-mailbox\" method=\"post\">
          <td bgcolor=\"#ff6600\" align=\"right\" valign=\"middle\">";
          display_account_select($auth_user, $selected_account);
    echo "</td>
          </form>";
  }
  ?>
  </tr>
  </table>
  <table width="<?php echo $table_width;?>" cellpadding="0" cellspacing="0" border="0">
  <tr><td>
<?php
}

function do_html_footer() {
  // print an HTML footer
  global $table_width;
?>
  </td></tr>
  </table>
  <table width="<?php echo $table_width;?>" cellpadding="6" cellspacing="0" border="0">
  <tr>
  <td bgcolor="#ff6600" align="right"><img src="images/warm-mail.gif"
             width="103" height="45" alt="" valign="middle" />
  </td>
  </tr>
  </table>
  </body>
  </html>
<?php
}

function display_list($auth_user, $accountid) {
  // show the list of messages in this mailbox

  global $table_width;

  if(!$accountid) {
    echo "<p style=\"padding-bottom: 100px\">No mailbox selected.</p>";
  } else {

    $imap = open_mailbox($auth_user, $accountid);

    if($imap) {
      echo "<table width=\"".$table_width."\" cellspacing=\"0\"
                   cellpadding=\"6\" border=\"0\">";

      $headers = imap_headers($imap);
      // we could reformat this data, or get other details using
      // imap_fetchheaders, but this is not a bad summary so we just echo each

      $messages = sizeof($headers);
      for($i = 0; $i<$messages; $i++) {
        echo "<tr><td bgcolor=\"";
        if($i%2) {
          echo "#ffffff";
        } else {
          echo "#ffffcc";
        }
        echo "\"><a href=\"index.php?action=view-message&messageid=".($i+1)."\">";
        echo $headers[$i];
        echo "</a></td></tr>\n";
      }
      echo "</table>";
    } else {
      $account = get_account_settings($auth_user, $accountid);
      echo "<p style=\"padding-bottom: 100px\">Could not open mail box ".$account['server'].".</p>";
    }
  }
}


function display_account_select($auth_user, $selected_account) {
  // show the dropdown box for the user to select from their accounts

  $list = get_account_list($auth_user);
  $accounts = sizeof($list);

  if($accounts>1)  {
    echo "<select onchange=\"window.location=this.options[selectedIndex].value name=account\">";
    if($selected_account=='') {
      echo "<option value=\"0\" selected>Choose Account</a>";
    }

    for($i = 0; $i<$accounts; $i++) {
      $account = get_account_settings($auth_user, $list[$i]);
      echo "<option value=\"index.php?action=select-account&account=".$list[$i]."\"";
      if($list[$i]==$selected_account) {
        echo " selected";
      }
      echo ">".$account['server']."</option>";
    }
    echo "</select>";
  }
}

function display_account_setup($auth_user) {
  //display empty 'new account' form

  display_account_form($auth_user);
  $list = get_accounts($auth_user);
  $accounts = sizeof($list);

  // display each stored account
  foreach($list as $key => $account)  {
    // display form for each accounts details.
    // note that we are going to send the password for all accounts in the HTML
    // this is not really a very good idea
    display_account_form($auth_user, $account['accountid'], $account['server'], $account['remoteuser'],
                         $account['remotepassword'], $account['type'],
                         $account['port']);
  }
}

function display_account_form($auth_user, $accountid=0, $server='',
                              $remoteuser='', $remotepassword='',
                              $type='IMAP', $port=143) {
  //the default POP3 port is 110, the default IMAP port is 143

  //display one form for account settings

  if($server) {
    $title = $server;
  } else {
    $title = 'New Account';
  }
?>
  <div align="center">
  <form method="post" action="index.php?action=store-settings">
  <table bgcolor="#cccccc" cellpadding="6" cellspacing="0" border="0">
   <tr>
     <th colspan="2" bgcolor="#ff6600">
        <?php echo $title;?>
     </th>
   </tr>
   <tr>
     <td>Server Name:</td>
     <td><input type="text" name="server" maxlength="100" value="<?php echo $server;?>"></td>
   </tr>
   <tr>
     <td>Port Number:</td>
     <td><input type="text" name="port" maxlength="5" value="<?php echo $port; ?>"></td>
   </tr>
   <tr>
     <td>Server Type:</td>
     <?php
       echo "<td><select name=\"type\"><option value=\"IMAP\"";
       if ($type == IMAP) {
          echo " selected";
       }
       echo ">IMAP</option><option value=\"POP3\"";
       if ($type == POP3) {
          echo " selected";
       }
       echo ">POP3</option></select></td>";
     ?>
   </tr>
   <tr>
     <td>User Name:</td>
     <td><input type="text" name="remoteuser" value="<?php echo $remoteuser; ?>"></td>
   </tr>
   <tr>
     <td>Password:</td>
     <td><input type="password" name="remotepassword" value="<?php echo $remotepassword; ?>"></td>
   </tr>
   <input type="hidden" name="account" value="<?php echo $accountid; ?>">
   <tr>
   <?php
      if($accountid>0){
        echo "<td align=\"center\">";
        display_form_button('save-changes');
        echo "</td>
              </form>
              <form action=\"index.php?action=delete-account\" method=\"post\">
              <input type=\"hidden\" name=\"account\" value=\"".$accountid."\">
              <td align=\"center\">";
        display_form_button('delete-account');
        echo "</td>
              </form>
              </tr>";
      } else {
        echo "<td colspan=\"2\" align=\"center\">";
        display_form_button('save-changes');
        echo "</td></form>";
      }
   ?>
   </tr>
 </table>
 </div>
 <br />
<?php
}

function display_login_form($action) {
  // display form asking for name and password
?>
  <div align="center">
  <form method="post" action="index.php?action=<?php echo $action; ?>">
  <table bgcolor="#cccccc" border="0" cellpadding="6" cellspacing="0">
   <tr>
     <th colspan="2" bgcolor="#ff6600"><p>Please Log In</p></th>
   </tr>
   <tr>
     <td>Username:</td>
     <td><input type="text" name="username"/></td></tr>
   <tr>
     <td>Password:</td>
     <td><input type="password" name="passwd"/></td></tr>
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
  echo "<input type=\"image\" src=\"images/".$button.".gif\"
        border=\"0\" width=\"149\" height=\"43\"
        alt=\"".format_action($button)."\"></a>";
}

function display_button($button, $extra_parameters = '') {
  //display one of our standard buttons as a href
  $url = "index.php?action=$button";
  if($extra_parameters) {
    $url .= $extra_parameters;
  }
  echo "<a href=\"$url\"><img src=\"images/".$button.".gif\"
         border=\"0\" width=\"149\" height=\"43\"
         alt=\"".format_action($button)."\" /></a>";
}

function display_spacer() {
  //display blank spacer the size of our buttons
  echo "<img src=\"images/spacer.gif\" border=\"0\"
        width=\"149\" height=\"43\" alt=\"\" />";
}

function format_action($string) {
  // convert our actions into a displayable string
  // eg "account-setup" becomes "Account Setup"
  $string = str_replace('-', ' ', $string);
  $string = ucwords($string);
  return $string;
}

function display_toolbar($button, $extra_parameters = '') {
  // draw on of our toolbars

  global $table_width;

  echo "<table width=\"".$table_width."\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">
        <tr>
        <td bgcolor=\"#ccccc\" align=\"center\">";

  for($i = 0; $i < 5; $i++) {
    if ($button[$i]) {
      display_button($button[$i], $extra_parameters);
    } else {
      display_spacer();
    }
  }
  echo "</td>
        </tr>
        </table>";
}

function pretty($string) {
  //prepare a text message for tidy display as HTML

  $string = trim($string);
  $string = htmlspecialchars($string);
  $string = nl2br($string);
  $string = stripslashes($string);

  return $string;
}

function pretty_all($array) {
  //prepare an array of text messages for tidy display as HTML
  foreach ($array as $key => $val) {
    $array[$key] = pretty($val);
  }
  return $array;
}


function display_message($auth_user, $accountid, $messageid, $fullheaders) {
  //show an email message

  global $table_width;

  $buttons = array();
  $buttons[0] = 'reply';
  $buttons[1] = 'reply-all';
  $buttons[2] = 'forward';
  $buttons[3] = 'delete';

  if($fullheaders) {
    $buttons[4] = 'hide-headers';
  } else {
    $buttons[4] = 'show-headers';
  }

  $message = retrieve_message($auth_user, $accountid, $messageid, $fullheaders);
  if(sizeof($message)==0)   {
    echo "<p style=\"padding-bottom: 100px\">Cannot retrieve message number ".$messageid.".</p>";
  } else {
    $message = pretty_all($message);
  }
?>
  <table width="<?php echo $table_width; ?>" cellpadding="4" cellspacing="0" border="0">
  <tr>
    <td bgcolor="#cccccc"><strong>Subject:</strong></td>
    <td bgcolor="#cccccc"><strong><?php echo $message[subject];?></strong></td>
  </tr>
  <tr>
    <td bgcolor="#cccccc"><strong>From:</strong></td>
    <td bgcolor="#cccccc"><strong><?php echo $message[fromaddress];?></strong></td>
  </tr>
  <tr>
    <td bgcolor="#cccccc"><strong>To:</strong></td>
    <td bgcolor="#cccccc"><strong><?php echo $message[toaddress];?></strong></td>
  </tr>
  <tr>
    <td bgcolor="#cccccc"><strong>CC:</strong></td>
    <td bgcolor="#cccccc"><strong><?php echo $message[ccaddress];?></strong></td>
  </tr>
  <tr>
    <td bgcolor="#cccccc"><strong>Received:</strong></td>
    <td bgcolor="#cccccc"><strong><?php echo $message[date]; ?></strong></td>
  </tr>
  </table>

  <?php display_toolbar($buttons, "&messageid=$messageid");?>
  <table width="<?php echo $table_width; ?>" cellpadding="4" cellspacing="0" border="0">
  <tr>
    <td bgcolor="#cccccc">
    <?php echo $message[fullheaders]; ?>
    </td>
  </tr>
  </table>

  <table width="<?php echo $table_width; ?>" cellpadding="4" cellspacing="0" border="0">
  <tr>
    <td>
    <?php echo $message[body]; ?>
    </td>
  </tr>
  </table>
<?php
}

function display_new_message_form($auth_user, $to='',$cc='',$subject='', $message='') {
  // display html form either for a brand new message, or to allow user to
  // edit replies or forwards

  global $table_width;

?>
  <table cellpadding="4" cellspacing="0" border="0" width="<?php echo $table_width; ?>">
  <form action="index.php?action=send-message" method="post">
  <tr>
    <td bgcolor="#cccccc">To Address:</td>
    <td bgcolor="#cccccc">
      <input type="text" name="to" value="<?php echo $to; ?>" size="60" />
    </td>
  </tr>
  <tr>
    <td bgcolor="#cccccc">CC Address:</td>
    <td bgcolor="#cccccc">
      <input type="text" name="cc" value="<?php echo $cc; ?>" size="60" />
    </td>
  </tr>
  <tr>
    <td bgcolor="#cccccc">Subject:</td>
    <td bgcolor="#cccccc">
      <input type="text" name="subject" value="<?php echo $subject; ?>" size="60" />
  </tr>
  <tr>
    <td colspan="2" bgcolor="#cccccc">
      <textarea name="message" rows="10" cols="72"><?php echo $message; ?></textarea>
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center" bgcolor="#cccccc">
      <?php display_form_button('send-message'); ?>
    </td>
  </tr>
  </form>
  </table>
<?php
}
?>
