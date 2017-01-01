<?php
$table_width = '580';

function reformat_date($datetime) {
  // put date in US format, discard seconds
  list($year, $month, $day, $hour, $min, $sec) = split( '[: -]', $datetime );
  return "$hour:$min $month/$day/$year";
}

function display_tree($expanded, $row = 0, $start = 0) {
  // display the tree view of conversations

  global $table_width;
  echo "<table width=\"".$table_width."\">";

  // see if we are displaying the whole list or a sublist
  if($start>0) {
    $sublist = true;
  } else {
    $sublist = false;
  }

  // construct tree structure to represent conversation summary
  $tree = new treenode($start, '', '', '', 1, true, -1, $expanded, $sublist);

  // tell tree to display itself
  $tree->display($row, $sublist);

  echo "</table>";
}

function do_html_header($title = '') {
  // print an HTML header including cute logo :)
  global $table_width;
?>
  <html>
  <head>
    <title><?php echo $title; ?></title>
    <style>
      h1 { font-family: 'Times New Roman', Times,  serif; font-size: 32;
           font-weight: normal; color:  white; margin-bottom: 0}
      b { font-family: 'Times New Roman', Times,  serif; font-size: 18;
          font-weight: normal; color: black }
      body, li, td { font-family: Arial, Helvetica, sans-serif;
                     font-size: 15px; margin = 5px }
      a { color: #000000 }
    </style>
  </head>
  <body>
  <table width="<?php echo $table_width; ?>" cellspacing="0" cellpadding="6">
  <tr>
  <td bgcolor="#3333cc" width="110"><img src="images/blah-blah.gif"
                 width="98" height="45" alt="" valign="middle" />
  </td><td bgcolor="#3333cc">
  <h1><?php echo $title; ?></h1></td>
  </tr>
  </table>
<?php
}

function do_html_footer() {
  // print an HTML footer

  global $table_width;
?>
  <table width="<?php echo $table_width; ?>" cellspacing="0" cellpadding="6">
  <tr>
  <td bgcolor="#3333cc" width="110"><img src="images/blah-blah.gif"
                 width="98" height="45" alt="" valign="middle" />
  </td>
  </tr>
  </table>
  </body>
  </html>
<?php
}

function display_replies_line() {
  global $table_width;
?>
  <table width="<?php echo $table_width; ?>" cellpadding="4"
         cellspacing="0" bgcolor="#cccccc">
  <tr><td><strong>Replies to this message</strong></td></tr>
  </table>
<?php
}

function display_index_toolbar()
{
  global $table_width;
?>
  <table width="<?php echo $table_width; ?>" cellpadding="4" cellspacing="0">
  <tr>
    <td bgcolor="#cccccc" align="right">
      <a href="new_post.php?parent=0"><img src="images/new-post.gif"
             border="0" width="99" height="39"></a><a
         href="index.php?expand=all"><img src="images/expand.gif"
             border="0" width="99" height="39"
             alt="Expand All Threads"></a><a
         href="index.php?collapse=all"><img src="images/collapse.gif"
             border="0" width="99" height="39" alt="Collapse All Threads"></a>
    </td>
  </tr>
  </table>
<?php
}

function display_post($post) {
  global $table_width;

  if(!$post) {
    return;
  }
?>
  <table width="<?php echo $table_width; ?>" cellpadding="4" cellspacing="0">
  <tr>
    <td bgcolor="#cccccc">
      <strong>From: <?php echo $post['poster'];?></strong><br />
      <strong>Posted: <?php echo $post['posted'];?></strong>
    </td>
    <td bgcolor="#cccccc" align="right">
      <a href="new_post.php?parent=0"><img src="images/new-post.gif"
             border="0" width="99" height="39" /></a><a
         href="new_post.php?parent=<?php echo $post['postid']; ?>"><img
             src="images/reply.gif" border="0" width="99"
             height="39" /></a><a
         href="index.php?expanded=<?php echo $post['postid']; ?>"><img
             src="images/index.gif" border="0" width="99" height="39" /></a>
  </td>
  </tr>
  <tr><td colspan="2">
  <?php echo nl2br($post['message']);?>
  </td></tr>
  </table>
<?php
}

function display_new_post_form($parent = 0, $area = 1, $title='', $message='', $poster='') {
  global $table_width;
?>
  <table cellpadding="0" cellspacing="0" border="0" width="<?php echo $table_width; ?>">
  <form action="store_new_post.php?expand=<?php echo $parent;?>#<?php echo $parent;?>"
        method="post">
  <tr>
    <td bgcolor="#cccccc">Your Name:</td>
    <td bgcolor="#cccccc"><input type="text" name="poster"
        value="<?php echo $poster; ?>" size="20" maxlength="20"/>
    </td>
  </tr>
  <tr>
    <td bgcolor="#cccccc">Message Title:</td>
    <td bgcolor="#cccccc"><input type="text" name="title"
        value="<?php echo $title; ?>" size="20" maxlength="20" /></td>
  </tr>
  <tr>
    <td colspan="2">
      <textarea name="message" rows="10" cols="55"><?php echo stripslashes($message);?></textarea>
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center" bgcolor="#cccccc">
      <input type="image" name="post" src="images/post.gif"
             alt="Post Message" width="99" height="39"/>
    </td>
    <input type="hidden" name="parent" value="<?php echo $parent; ?>">
    <input type="hidden" name="area" value="<?php echo $area; ?>">
  </tr>
  </form>
  </table>
<?php
}
?>
