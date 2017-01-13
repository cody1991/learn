<?php
  require 'vendor/autoload.php';
  require 'src/Url/Scanner.php';

  $urls = [
    'http://www.apple.com',
    'http://php.net',
    'http://sdfssdwerw.org'
  ];

  use Cody\ModernPHP\Url\Scanner;

  $scanner = new Scanner($urls);

  print_r($scanner->getInvalidUrls());


