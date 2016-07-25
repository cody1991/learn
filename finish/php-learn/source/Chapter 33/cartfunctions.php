<?php
require_once('AmazonResultSet.php');

// Using the function showSummary() in the file bookdisplay.php display
// the current contents of the shopping cart
function showCart($cart, $mode) {
  // build an array to pass
  $products = array();
  foreach($cart as $ASIN=>$product)  {
    $ars = getARS('asin', array('asin'=>$ASIN, 'mode'=>$mode));
    if($ars) {
      $products[] = $ars->getProduct(0);
    }
  }
  // build the form to link to an Amazon.com shopping cart
  echo "<form method=\"POST\"
              action=\"http://www.amazon.com/gp/aws/cart/add.html\">";

  foreach($cart as $ASIN=>$product)   {
    $quantity = $cart[$ASIN]['quantity'];
    echo "<input type=\"hidden\" name=\"ASIN.".$ASIN."\"  value=\"".$ASIN."\">";
    echo "<input type=\"hidden\" name=\"Quantity.".$ASIN."\" value=\"".$quantity."\">";
  }

  echo "<input type=\"hidden\" name=\"SubscriptionId\" value=\"".DEVTAG."\">
        <input type=\"hidden\" name=\"AssociateTag\" value=\"".ASSOCIATEID."\">
        <input type=\"image\" src=\"images/checkout.gif\"
               name=\"submit.add-to-cart\" value=\"Buy From Amazon.com\">
         When you have finished shopping press checkout to add all the
         items in your Tahuayo cart to your Amazon cart and complete
         your purchase.
         </form>
         <br/><a href=\"index.php?action=emptycart\"><img
           src=\"images/emptycart.gif\" alt=\"Empty Cart\" border=\"0\"></a>
        If you have finished with this cart, you can empty it of all items.
        </form>
        <br />
        <h1>Cart Contents</h1>";

  showSummary($products, 1, count($products), $mode,  0, true);

}

// show the small overview cart that is always on the screen
// only shows the last three items added
function showSmallCart() {
  global $_SESSION;

  echo "<table border=\"1\" cellpadding=\"1\" cellspacing=\"0\">
        <tr><td class=\"cartheading\">Your Cart $".
       number_format(cartPrice(), 2)."</td></tr>
       <tr><td class=\"cart\">".cartContents()."</td></tr>";

  // form to link to an Amazon.com shopping cart
  echo "<form method=\"POST\"
              action=\"http://www.amazon.com/gp/aws/cart/add.html\">
        <tr><td class=\"cartheading\"><a
                href=\"index.php?action=showcart\"><img
                src=\"images/details.gif\" border=\"0\"></a>";

  foreach($_SESSION['cart'] as $ASIN=>$product)   {
    $quantity = $_SESSION['cart'][$ASIN]['quantity'];
    echo "<input type=\"hidden\" name=\"ASIN.".$ASIN."\"  value=\"".$ASIN."\">";
    echo "<input type=\"hidden\" name=\"Quantity.".$ASIN."\" value=\"".$quantity."\">";
  }
  echo "<input type=\"hidden\" name=\"SubscriptionId\" value=\"".DEVTAG."\">
        <input type=\"hidden\" name=\"AssociateTag\" value=\"".ASSOCIATEID."\">
        <input type=\"image\" src=\"images/checkout.gif\"
               name=\"submit.add-to-cart\" value=\"Buy From Amazon.com\">
        </td></tr>
        </form>
        </table>";
}


// show last three items added to cart
function cartContents() {
  global $_SESSION;

  $display = array_slice($_SESSION['cart'], -3, 3);
  // we want them in reverse chronological order
  $display = array_reverse($display, true);

  $result = '';
  $counter = 0;

  // abbreviate the names if they are long
  foreach($display as $product)   {
    if(strlen($product['name'])<=40) {
      $result .= $product['name']."<br />";
    } else {
      $result .= substr($product['name'], 0, 37)."...<br />";
    }
    $counter++;
  }

  // add blank lines if the cart is nearly empty to keep the
  // display the same
  for(;$counter<3; $counter++) {
    $result .= "<br />";
  }
  return $result;
}

// calculate total price of items in cart
function cartPrice() {
  global $_SESSION;
  $total = 0.0;
  foreach($_SESSION['cart'] as $product)  {
    $price = str_replace('$', '', $product['price']);
    $total += $price*$product['quantity'];
  }

  return $total;
}

// add a single item to cart
// there is currently no facility to add more than one at a time
function addToCart(&$cart, $ASIN, $mode) {
  if(isset($cart[$ASIN] ))   {
    $cart[$ASIN]['quantity'] +=1;
  } else {
    // check that the ASIN is valid and look up the price
    $ars = new AmazonResultSet;
    $product = $ars->ASINSearch($ASIN, $mode);

    if($product->valid()) {
      $cart[$ASIN] = array('price'=>$product->ourPrice(),
            'name' => $product->productName(), 'quantity' => 1) ;
     }
  }

}

// delete all of a particular item from cart
function deleteFromCart(&$cart, $ASIN) {
  unset ($cart[$ASIN]);
}

?>