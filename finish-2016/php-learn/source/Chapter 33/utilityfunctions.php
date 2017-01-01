<?php

//utility functions
  function isSOAPError(&$result)  {
    if(isset($result['faultcode'])) {
      return true;
    } else {
      return false;
    }
  }

  // ASINs are 10 characters wide, but sometimes the leading 0s get lost.
  // They are needed, so are put back on.
  // eg '067232525X' is the ISBN/ASIN of this book. '67232525X' is invalid.
  function padASIN($ASIN) {
    $len = strlen($ASIN);
    $padding = "0000000000";
    $padding = substr($padding, 0, 10-$len);
    return $padding.$ASIN;
  }

  // we are going to use search string as part of filenames,
  // so need to make sure it is safe
  function safeString($string)  {
    return eregi_replace('[^[:alnum:] ]', '', $string);
  }
?>