<?php
  include ('include_fns.php');
  session_start();

  // check if we have created our session variable
  if(!isset($_SESSION['expanded']))  {
    $_SESSION['expanded'] = array();
  }

  // check if an expand button was pressed
  // expand might equal 'all' or a postid or not be set
  if(isset($_GET['expand']))   {
    if($_GET['expand'] == 'all') {
      expand_all($_SESSION['expanded']);
    } else {
      $_SESSION['expanded'][$_GET['expand']] = true;
    }
  }

  // check if a collapse button was pressed
  // collapse might equal all or a postid or not be set
  if(isset($_GET['collapse'])) {
    if($_GET['collapse']=='all') {
      $_SESSION['expanded'] = array();
    } else {
      unset($_SESSION['expanded'][$_GET['collapse']]);
    }
  }

  do_html_header('Discussion Posts');

  display_index_toolbar();

  // display the tree view of conversations
  display_tree($_SESSION['expanded']);

  do_html_footer();
?>
