<?php 
  require 'vendor/autoload.php';
  require '2-namespace.php';

  use Cody\App\Foo;

  $foo = new Foo();
  $foo->doSomething()
?>
