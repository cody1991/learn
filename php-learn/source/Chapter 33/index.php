<?php
//we are only using one session variable 'cart' to store the cart contents
session_start();

require_once('constants.php');
require_once('Product.php');
require_once('AmazonResultSet.php');
require_once('utilityfunctions.php');
require_once('bookdisplayfunctions.php');
require_once('cartfunctions.php');
require_once('categoryfunctions.php');

// These are the variables we are expecting from outside.
// They will be validated and converted to globals
$external = array('action', 'ASIN', 'mode', 'browseNode', 'page', 'search');

// the variables may come via Get or Post
// convert all our expected external variables to short global names
foreach ($external as $e) {
  if(@$_REQUEST[$e]) {
    $$e = $_REQUEST[$e];
  } else {
    $$e = '';
  }

  $$e = trim($$e);
}

// default values for global variables
if($mode=='') {
  $mode = 'Books'; // No other modes have been tested
}
if($browseNode=='') {
  $browseNode = 53; //53 is bestselling non-fiction books
}
if($page=='') {
  $page = 1;  // First Page - there are 10 items per page
}

//validate/strip input
if(!eregi('^[A-Z0-9]+$', $ASIN)) {
  // ASINS must be alpha-numeric
  $ASIN ='';
}
if(!eregi('^[a-z]+$', $mode)) {
  // mode must be alphabetic
  $mode = 'Books';
}
$page=intval($page); // pages and browseNodes must be integers
$browseNode = intval($browseNode);
// it may cause some confusion, but we are stripping characters out from
// $search it seems only fair to modify it now so it will be displayed
// in the heading
$search = safeString($search);

if(!isset($_SESSION['cart'])) {
  session_register('cart');
  $_SESSION['cart'] = array();
}

// tasks that need to be done before the top bar is shown
if($action == 'addtocart') {
  addToCart($_SESSION['cart'], $ASIN, $mode);
}
if($action == 'deletefromcart') {
  deleteFromCart($_SESSION['cart'], $ASIN);
}
if($action == 'emptycart') {
  $_SESSION['cart'] = array();
}

// show top bar
require_once ('topbar.php');

// main event loop.  Reacts to user action on the calling page
switch ($action) {
  case 'detail':
    showCategories($mode);
    showDetail($ASIN, $mode);
  break;

  case 'addtocart':
  case 'deletefromcart':
  case 'emptycart':
  case 'showcart':
    echo "<hr /><h1>Your Shopping Cart</h1>";
    showCart($_SESSION['cart'], $mode);
  break;

  case 'image':
    showCategories($mode);
    echo "<h1>Large Product Image</h1>";
    showImage($ASIN, $mode);
  break;

  case 'search':
    showCategories($mode);
    echo "<h1>Search Results For ".$search."</h1>";
    showSearch($search, $page, $mode);
  break;

  case 'browsenode':
  default:

    showCategories($mode);
    $category = getCategoryName($browseNode);
    if(!$category || ($category=='Best Selling Books')) {
      echo "<h1>Current Best Sellers</h1>";
    } else  {
      echo "<h1>Current Best Sellers in ".$category."</h1>";
    }
    showBrowseNode($browseNode, $page, $mode) ;
  break;
}
require ('bottom.php');
?>
