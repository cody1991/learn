<?php 
  if(php_sapi_name()==='cli-server'){
    echo '内置服务器';
  }

  if(preg_match('/\.(?:png|jpg|jpeg|gif)$/',$_SERVER['REQUEST_URI'])){
    return false;
  }else{
    echo "<p>Welcome to PHP</p>";
    echo "<pre>";
    print_r(pathinfo($_SERVER["SCRIPT_FILENAME"]));

    print_r($_SERVER);
    echo "</pre>";
  }

  // Array
  // (
  //     [dirname] => /Users/cody1991/Desktop/github/learn/PHP/modernPHP-book/ch2
  //     [basename] => router.php
  //     [extension] => php
  //     [filename] => router
  // )
?>
