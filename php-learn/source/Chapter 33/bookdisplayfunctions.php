<?php
require_once('AmazonResultSet.php');
require_once('cachefunctions.php');

// Display the large cover image for a book
// (or probably the equivalent image for other products)
function showImage($ASIN, $mode) {
  $ars = getARS('asin', array('asin'=>$ASIN, 'mode'=>$mode));
  $url = $ars->getImageURLLarge($ASIN, $mode);
  $imageFile = getImage($url);

  echo "<hr/>
        <p align=\"center\">
             <a href=\"index.php?action=detail&ASIN=".$ASIN."&mode=".$mode."\">
             <img src=\"images/details.gif\"
                  alt=\"View Book Details\" border=\"0\"></a></p>
        <p align=\"center\">
           <a href=\"index.php?action=detail&ASIN=".$ASIN."&mode=".$mode."\">
              <img src=\"".$imageFile."\" alt=\"View Book Details\"
                  border=\"0\"></a></p>
        <p align=\"center\">
             <img src=\"images/details.gif\"
                  alt=\"View Book Details\" border=\"0\"></a></p>
        <hr/>";
}

// For a particular browsenode, display a page of products
function showBrowseNode($browseNode, $page, $mode) {
  $ars = getARS('browse', array('browsenode'=>$browseNode, 'page' => $page, 'mode'=>$mode));
  showSummary($ars->products(), $page, $ars->totalResults(), $mode, $browseNode);
}

// display the results of a keyword search
function showSearch($search, $page, $mode) {
  $ars = getARS('search', array('search'=>$search, 'page' => $page, 'mode'=>$mode));
  $products = &$ars->products();
  if($products) {
    showSummary($products, $page, $ars->totalResults(), $mode, 0, false, $search);
  } else {
    echo "<p>No products matched your search term.</p>";
  }
}

// show a pageful of summary information about products
// this function is used to show browsenodes, the shopping cart and keyword search results
function showSummary($products, $page, $totalProducts, $mode, $browseNode=0, $cart=false, $search = ''){
  global $_SESSION;

  if(count($products)==0) {
    echo "<p>No products to display.</p>";
  } else {
    echo "<br/>
          <table border=\"0\" width=\"100%\" cellpadding=\"2\" cellspacing=\"0\">";

    foreach ($products as $product)  {

      $ASIN = $product->ASIN();

      echo "<tr><td colspan=\"2\"><hr/></td></tr>";
      $imageFile =getImage($product->imageURLMedium());

      echo "<tr><td align=\"center\">
            <a href=\"index.php?action=detail&ASIN=$ASIN\"><img src=\"".$imageFile."\"
                alt=\"View book details\" border=\"0\"></a></td>
                <td><h3>".$product->productName()."</h3>";

      echo displayAuthors($product->authors())."<br/>";

      if($product->releaseDate()) {
        echo "Published: ".$product->releaseDate()."<br/>";
      }

      echo "<span class=\"bookprice\">$".$product->ourPrice()."</span>";

      if($product->ourPrice()!=$product->listPrice()) {
        echo " (list price <span class=\"listprice\">$".$product->listPrice()."</span>)";
      }

      echo "<br/>";

      if($cart) {
         // display quantity and total price if showing shopping cart
        $quantity = $_SESSION['cart'][$ASIN]['quantity'];
        $price = $product->ourPrice();
        $total = number_format($quantity * $price, 2);
        echo "Quantity in Cart: ".$quantity."<br/>";
        echo "Total Price: <span class=\"bookprice\">$".$total."</span><br/>";
      }

      echo "ISBN: ".$ASIN."<br/>";
      if($product->avgCustomerRating()) {
        echo "Customer Rating: ".displayStars($product->avgCustomerRating())."<br/>";
      }

      if($cart) {
        echo "<a href=\"index.php?action=deletefromcart&ASIN=".$ASIN."\"><img
                 src=\"images/delete.gif\" alt=\"Remove From Cart\"
                 border=\"0\"></a> ";
      } else {
        echo "<a href=\"index.php?action=addtocart&ASIN=".$ASIN."\"><img
                 src=\"images/addtocart.gif\" alt=\"Add to Cart\"
                 border=\"0\"></a> ";
      }

      echo "<a href=\"index.php?action=detail&ASIN=".$ASIN."\"><img
                  src=\"images/details.gif\" alt=\"View Details\" border=\"0\"></a>
            </td></tr>";
    }

    echo "</table>";

    if (($totalProducts>10) && (!$cart)) {
     // we could break cart contents into pages, but choose not to
      echo "Go To Page: ";

      $pages = ceil($totalProducts/10);

      if($pages>30) {
        $pages=30;
      }

      for($i = 1; $i<=$pages; $i++) {
        if($page == $i) {
          echo "<strong>".$i."</strong> ";
        } else {
          if($browseNode) {
            echo "<a href=\"index.php?action=browsenode&browseNode="
                  .$browseNode."&page=".$i."\">".$i."</a>";
          }
          if($search) {
            echo "<a href=\"index.php?action=search&search=".$search
                   ."&page=".$i."\">".$i."</a> ";
          }
        }
      }
    }
  }
}

// display a detailed product page
// currently set up for books (uses words like publisher).
// Will need some modification for use with other product categories
function showDetail($ASIN, $mode) {
  $ars = getARS('asin', array('asin'=>$ASIN, 'mode'=>$mode));
  if($ars) {
    $product = $ars->getProduct(0);
  } else {
    echo "<p>Cannot get details for ".$ASIN."</p>";
  }

  if(!$product) {
    echo "<p>No product to display.</p>";
    return;
  }

  echo "<table border=\"0\" width=\"100%\" cellpadding=\"4\" cellspacing=\"4\">";

  $imageFile = getImage($product->imageURLMedium());

  echo "<tr>
        <td valign=\"top\" align=\"center\">
          <a href=\"index.php?action=image&ASIN=".$ASIN.
          "&mode=".$mode."\"><img src=\"".$imageFile."\"
           alt=\"View book details\" border=\"0\"></a><br/><br/>
           <a href=\"index.php?action=addtocart&ASIN=".$ASIN."\">
           <img src=\"images/addtocart.gif\" alt=\"Add to Cart\"
           border=\"0\"></a></td>
        <td><h1>".$product->productName()."</h1>";

  echo displayAuthors($product->authors(), false)."<br/>";

  if($product->releaseDate()) {
    echo "Published: ".$product->releaseDate()."<br/>";
  }
  if($product->manufacturer()) {
    echo "Publisher: ".$product->manufacturer()."<br/>";
  }

  echo "Our Price: <span class=\"bookprice\">$".$product->ourPrice()."</span><br/>";

  if($product->ourPrice()!=$product->listPrice()) {
    echo "List price: $".$product->listPrice();
  }

  $saving = $product->listPrice() - $product->ourPrice();

  if ($saving > 0.50) {
    $saving = number_format($saving, 2);
    echo " <span class=\"bookprice\">SAVE $".$saving."</span>";
  }

  echo "<br/>";
  echo "ISBN: ".$ASIN."<br/>";
  if($product->avgCustomerRating()) {
    echo "Customer Rating: ".displayStars($product->avgCustomerRating())."<br/>";
  }

  if($product->salesRank()) {
    echo "Sales Rank: ".$product->salesRank()."<br/>";
  }

  if($product->availability()) {
    echo "Availability: ".$product->availability()."<br/>";
  }
  echo '</p>';

  // remember that this section will be making up tp 5 extra calls to Amazon
  // remove it if it is too slow
  $similar = $product->similarProductCount();
  if($similar)   {
    echo "<hr/>";
    echo "<h2>Similar Products</h2><ul>";
    for($i = 0; $i<$similar; $i++)  {
      echo "<li>".similarSummary($product->similarProduct($i), $mode);
    }
    echo "</ul>";
  }

  $reviews = $product->customerReviewCount();

  if($reviews)  {
    echo "<hr/>";
    echo "<h2>Customer Reviews</h2>";
    for($i = 0; $i<$reviews; $i++)  {
      echo "<h3>". displayStars($product->customerReviewRating($i));
      echo " ".$product->customerReviewSummary($i)."</h3>";
      echo "<p>".$product->customerReviewComment($i)."</p>";
    }
  }
  echo "</td></tr>";

  echo "<tr><td colspan=\"2\"><hr/></td></tr>";
  echo "</table>";
}

// From an ASIN, get the name and author
// Used for the similar products list on the detail page
function similarSummary($items, $mode) {

  $ars = getARS('asin', array('asin'=>$items['ASIN'], 'mode'=>$mode));
  if($ars) {
	 $product = $ars->getProduct(0);
  } else {
     echo "<p>Cannot get details for ".$items['ASIN']."</p>";
  }

  if(!isset($product)) {
     return '';
  }

  $result = "<a href=\"index.php?action=detail&ASIN=".$items['ASIN']."\">".$items['Title']."</a> ";
  $result .= displayAuthors($product->authors());

  return $result;
}


// Display the author array in a readable way
// $short indicates list should be abbreviated for the summary page
function displayAuthors($authors, $short=true) {
  $count = count($authors);

  if($count == 0) {
    return '';
  }

  $result = "by ". $authors[0];

  if($count == 1) {
    return $result;
  }

  if($short) {
    $max = 5;
  } else {
    $max = 50;
  }

  for($i=1; ($i < $count-1) && ($i < $max); $i++) {
    $result .= ', '.$authors[$i];
  }

  if(($count >= $max) || ($authors[$count-1] == 'et al')) {
    $result .= ' et al.';
  } else {
    $result .= ' and '.$authors[$count-1];
  }

  return $result;
}

// from floating point number choose how many star gifs to show
function displayStars($rating) {
  $result = '';

  $count = $rating*2;
  $count = round($count);
  $count = $count/2;

  $rating = number_format($rating, 1);

  while($count>0) {
    if($count>=1)  {
      $result .= "<img src='images/star.gif' alt= '".$rating." Stars'>";
    } else if($count>0.4) {
      $result .= "<img src='images/halfstar.gif' alt= '".$rating." Stars'>";
    }
    $count--;
  }
  return $result;
}
?>