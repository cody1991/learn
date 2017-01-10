<?php 
  require 'vendor/autoload.php';

  use Symfony\Component\HttpFoundation\Response as Response;
  use Symfony\Component\HttpFoundation\Request;
  use Symfony\Component\HttpFoundation\Cookie;

  $response = new Response('Oops', 400);
  $response->send();
?>
