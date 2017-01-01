<?php

require_once('Product.php');
require_once('AmazonResultSet.php');

// Get an AmazonResultSet either from cache or a live query
// If a live query add it to the cache
function getARS($type, $parameters) {

  $cache = cached($type, $parameters);

  if ($cache) {
    // if found in cache
    return $cache;
  } else {
    $ars = new AmazonResultSet;
    if($type == 'asin') {
      $ars->ASINSearch(padASIN($parameters['asin']), $parameters['mode']);
    }
    if($type == 'browse') {
      $ars->browseNodeSearch($parameters['browsenode'], $parameters['page'], $parameters['mode']);
    }
    if($type == 'search') {
      $ars->keywordSearch($parameters['search'], $parameters['page'], $parameters['mode']);
    }
    cache($type, $parameters, $ars);
  }
  return $ars;
}

// check if Amazon data is in the cache
// if it is, return it
// if not, return false
function cached($type, $parameters) {
  if($type == 'browse') {
    $filename = CACHE.'/browse.'.$parameters['browsenode'].'.'.$parameters['page'].'.'.$parameters['mode'].'.dat';
  }
  if($type == 'search') {
    $filename = CACHE.'/search.'.$parameters['search'].'.'.$parameters['page'].'.'.$parameters['mode'].'.dat';
  }
  if($type == 'asin') {
    $filename = CACHE.'/asin.'.$parameters['asin'].'.'.$parameters['mode'].'.dat';
  }

  // is cached data missing or > 1 hour old?
  if(!file_exists($filename) ||
      ((mktime() - filemtime($filename)) > 60*60))  {
    return false;
  }
  $data = file_get_contents($filename);
  return unserialize($data);
}

// add Amazon data to the cache
function cache($type, $parameters, $data) {
  if($type == 'browse') {
    $filename = CACHE.'/browse.'.$parameters['browsenode'].'.'.$parameters['page'].'.'.$parameters['mode'].'.dat';
  }
  if($type == 'search') {
    $filename = CACHE.'/search.'.$parameters['search'].'.'.$parameters['page'].'.'.$parameters['mode'].'.dat';
  }
  if($type == 'asin') {
    $filename = CACHE.'/asin.'.$parameters['asin'].'.'.$parameters['mode'].'.dat';
  }

  $data = serialize($data);

  $fp = fopen($filename, 'wb');
  if(!$fp || (fwrite($fp, $data)==-1))  {
    echo  ('<p>Error, could not store cache file');
  }
  fclose($fp);
}

//download a new copy of an Amazon image if we do not
// already have a copy, or if our copy is too old
function getImage($url) {
  $imageFile = CACHE.'/'.basename($url);
  // is cached image missing or > 24 hours old?
  if(!file_exists($imageFile) ||
     ((mktime() - filemtime($imageFile)) > 24*60*60)) {
    // get image
    $image = file_get_contents($url);
    if(!$image) {
      return false;
    }

    // store image
    $fp = fopen($imageFile, 'wb');
    if(!file_put_contents($imageFile, $image)) {
      return false;
    }
    fclose($fp);
  }
  return $imageFile;
}
?>
